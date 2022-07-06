import React from "react";
import { PropTypes } from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";

import { S } from "./styles";

import { data } from "./data";
import { handleMenu } from "../../../services/menu/menuSlice";

const renderMenuHandler = (item, index, handleMenuAction, menuActive) => {
  const { defaultIcon, activeIcon } = item;

  return (
    <S.MenuHandler key={index} onClick={handleMenuAction}>
      {menuActive ? activeIcon : defaultIcon}
    </S.MenuHandler>
  );
};

const renderMenuAction = (index, handler, icon, name) => {
  return (
    <S.MenuItem key={`${name}_${index}`}>
      <S.MenuItemLink>
        <S.MenuItemIcon>{icon}</S.MenuItemIcon>
        <S.MenuItemName>{name}</S.MenuItemName>
      </S.MenuItemLink>
    </S.MenuItem>
  );
};

const renderMenuItems = (item, index, handleMenuAction, menuActive) => {
  const router = useRouter();
  const { name, icon, link, handler } = item;

  const activeLink = router.pathname === link;

  if (!link && !handler) {
    return renderMenuHandler(item, index, handleMenuAction, menuActive);
  }

  if (handler) {
    return renderMenuAction(index, handler, icon, name);
  }

  return (
    <S.MenuItem key={`${name}_${index}`}>
      <Link href={link} passHref>
        <S.MenuItemLink active={activeLink}>
          <S.MenuItemIcon>{icon}</S.MenuItemIcon>
          <S.MenuItemName>{name}</S.MenuItemName>
        </S.MenuItemLink>
      </Link>
    </S.MenuItem>
  );
};

function MobileMenu({ menuActive, handleMenuAction, showModal }) {
  return (
    <S.Menu active={menuActive} showModal={showModal}>
      <S.MenuContainer>
        {data &&
          data.map((item, index) =>
            renderMenuItems(item, index, handleMenuAction, menuActive)
          )}
      </S.MenuContainer>
    </S.Menu>
  );
}

const mapStateToProps = ({ menuService, modalService }) => ({
  menuActive: menuService.active,
  showModal: modalService.showModal,
});

const mapDispatchToProps = {
  handleMenuAction: handleMenu,
};

MobileMenu.propTypes = {
  menuActive: PropTypes.bool.isRequired,
  handleMenuAction: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);

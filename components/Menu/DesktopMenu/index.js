import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";

import { S } from "./styles";

import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { data } from "../data";
import { handleMenu } from "../../../services/menu/menuSlice";

const renderMenuIcon = (menuActive) => {
  if (menuActive) {
    return <CgClose color="white" />;
  }

  return <FiMenu color="white" />;
};

const renderMenuItems = (item, index, menuActive) => {
  const router = useRouter();
  const { icon, link, name } = item;

  const activeLink = router.pathname === link;

  if (!link) {
    return null;
  }

  return (
    <S.MenuItem key={`${name}_${index}`}>
      <Link href={link} passHref>
        <S.MenuItemLink active={activeLink}>
          <S.MenuItemIcon>{icon}</S.MenuItemIcon>
          {menuActive && <S.MenuItemName>{name}</S.MenuItemName>}
        </S.MenuItemLink>
      </Link>
    </S.MenuItem>
  );
};

function DesktopMenu({ menuActive, handleMenuAction }) {
  return (
    <S.Menu active={menuActive}>
      <S.MenuHandler onClick={handleMenuAction}>
        {renderMenuIcon(menuActive)}
      </S.MenuHandler>
      <S.MenuContainer>
        {data &&
          data.map((item, index) => renderMenuItems(item, index, menuActive))}
      </S.MenuContainer>
    </S.Menu>
  );
}

const mapStateToProps = ({ menuService }) => ({
  menuActive: menuService.active,
});

const mapDispatchToProps = {
  handleMenuAction: handleMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(DesktopMenu);

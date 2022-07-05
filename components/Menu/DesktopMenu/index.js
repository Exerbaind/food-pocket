import React, { useState } from "react";
import Link from "next/link";
import { PropTypes } from "prop-types";
import { useRouter } from "next/router";
import { connect } from "react-redux";

import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { HiPlus } from "react-icons/hi";
import { S } from "./styles";

import { data } from "./data";
import { handleMenu } from "../../../services/menu/menuSlice";

const handleDownloadItem = (
  menuActive,
  handleMenuAction,
  showDownloadList,
  setShowDownloadList
) => {
  if (!menuActive) {
    handleMenuAction();
    return setShowDownloadList(true);
  }

  return setShowDownloadList(!showDownloadList);
};

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

const renderDownloadList = (listActive) => {
  return (
    <S.DownloadList active={listActive}>
      <S.DownloadListItem>Блюдо</S.DownloadListItem>
      <S.DownloadListItem>Продукт</S.DownloadListItem>
      <S.DownloadListItem>Меню</S.DownloadListItem>
    </S.DownloadList>
  );
};

const renderDownloadHandler = (
  menuActive,
  handleMenuAction,
  showDownloadList,
  setShowDownloadList
) => {
  const listActive = menuActive && showDownloadList;
  return (
    <S.DownloadItem active={menuActive}>
      <S.DownloadContainer
        onClick={() =>
          handleDownloadItem(
            menuActive,
            handleMenuAction,
            showDownloadList,
            setShowDownloadList
          )
        }
      >
        <S.DownloadIcon active={!!listActive}>
          <HiPlus />
        </S.DownloadIcon>
        {menuActive && <S.DownloadText>Добавить</S.DownloadText>}
      </S.DownloadContainer>
      {renderDownloadList(listActive)}
    </S.DownloadItem>
  );
  // return (
  //   <S.MenuItem>
  //     <S.MenuItemLink>
  //       <S.MenuItemIcon>
  //         <HiPlus />
  //       </S.MenuItemIcon>
  //       {menuActive && <S.MenuItemName>Добавить</S.MenuItemName>}
  //     </S.MenuItemLink>
  //   </S.MenuItem>
  // );
};

function DesktopMenu({ menuActive, handleMenuAction, showForm }) {
  const [showDownloadList, setShowDownloadList] = useState(false);
  return (
    <S.Menu active={menuActive} showForm={showForm}>
      <S.MenuHandler onClick={handleMenuAction}>
        {renderMenuIcon(menuActive)}
      </S.MenuHandler>
      <S.MenuContainer>
        {renderDownloadHandler(
          menuActive,
          handleMenuAction,
          showDownloadList,
          setShowDownloadList
        )}
        {data &&
          data.map((item, index) => renderMenuItems(item, index, menuActive))}
      </S.MenuContainer>
    </S.Menu>
  );
}

const mapStateToProps = ({ menuService, modalFormService }) => ({
  menuActive: menuService.active,
  showForm: modalFormService.showForm,
});

const mapDispatchToProps = {
  handleMenuAction: handleMenu,
};

DesktopMenu.propTypes = {
  menuActive: PropTypes.bool.isRequired,
  handleMenuAction: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DesktopMenu);

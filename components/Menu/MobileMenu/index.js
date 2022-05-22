import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { S } from "./styles";

import { data } from "../data";
import { handleMenuAction } from "../../../services/menu/menuSlice";

const renderMenuHandler = (item, index, handleMenu, active) => {
  const { defaultIcon, activeIcon } = item;

  return (
    <S.MenuHandler key={index} onClick={handleMenu}>
      {active ? activeIcon : defaultIcon}
    </S.MenuHandler>
  );
};

const renderMenuItems = (item, index, handleMenu, active) => {
  const router = useRouter();
  const { mobileName, icon, link } = item;

  const activeLink = router.pathname === link;

  if (!link) {
    return renderMenuHandler(item, index, handleMenu, active);
  }

  return (
    <S.MenuItem key={`${mobileName}_${index}`}>
      <Link href={link} passHref>
        <S.MenuItemLink active={activeLink}>
          <S.MenuItemIcon>{icon}</S.MenuItemIcon>
          <S.MenuItemName>{mobileName}</S.MenuItemName>
        </S.MenuItemLink>
      </Link>
    </S.MenuItem>
  );
};

function MobileMenu() {
  const { active } = useSelector((store) => store.menuService);
  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(handleMenuAction());
  };
  return (
    <S.Menu active={active}>
      <S.MenuContainer>
        {data &&
          data.map((item, index) =>
            renderMenuItems(item, index, handleMenu, active)
          )}
      </S.MenuContainer>
    </S.Menu>
  );
}

export default MobileMenu;

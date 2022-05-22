import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { S } from "./styles";

import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { data } from "../data";
import { handleMenuAction } from "../../../services/menu/menuSlice";

const renderMenuIcon = (active) => {
  if (active) {
    return <CgClose color="white" />;
  }

  return <FiMenu color="white" />;
};

const renderMenuItems = (item, index, active) => {
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
          {active && <S.MenuItemName>{name}</S.MenuItemName>}
        </S.MenuItemLink>
      </Link>
    </S.MenuItem>
  );
};

function DesktopMenu() {
  const { active } = useSelector((store) => store.menuService);
  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(handleMenuAction());
  };

  return (
    <S.Menu active={active}>
      <S.MenuHandler onClick={handleMenu}>
        {renderMenuIcon(active)}
      </S.MenuHandler>
      <S.MenuContainer>
        {data &&
          data.map((item, index) => renderMenuItems(item, index, active))}
      </S.MenuContainer>
    </S.Menu>
  );
}

export default DesktopMenu;

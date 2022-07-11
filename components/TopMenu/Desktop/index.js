import React, { useState } from "react";
import { CgSearch, CgMenu } from "react-icons/cg";
import { HiPlus } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import * as components from "../..";
import * as ui from "../../../ui";
import { getActions, getState } from "../state";
import { Container, Title, IconsContainer, IconItem } from "./styles";

const renderPlankContent = (menuItemType) => {
  const menuList = {
    0: <components.SearchBar />,
  };

  return menuList[menuItemType];
};

const handleMenu = (setActive, flag, handleMenuItemType, type) => {
  setActive(flag);
  handleMenuItemType(type);
};

const renderIcons = (iconsPayload) => {
  const { active, setActive, handleMenuItemType, menuItemType } = iconsPayload;
  if (active) {
    return (
      <IconsContainer>
        <IconItem
          onClick={() =>
            handleMenu(setActive, false, handleMenuItemType, menuItemType)
          }
        >
          <VscChromeClose />
        </IconItem>
      </IconsContainer>
    );
  }

  return (
    <IconsContainer>
      <IconItem
        onClick={() => handleMenu(setActive, true, handleMenuItemType, 0)}
      >
        <CgSearch />
      </IconItem>
      <IconItem
        onClick={() => handleMenu(setActive, true, handleMenuItemType, 1)}
      >
        <HiPlus />
      </IconItem>
      <IconItem
        onClick={() => handleMenu(setActive, true, handleMenuItemType, 2)}
      >
        <CgMenu />
      </IconItem>
    </IconsContainer>
  );
};

export function Desktop() {
  const { menuItemType } = getState();
  const { handleMenuItemType } = getActions();

  const [active, setActive] = useState(false);
  const iconsPayload = {
    active,
    setActive,
    menuItemType,
    handleMenuItemType,
  };
  return (
    <>
      <Container>
        <Title>FoodPocket</Title>
        {renderIcons(iconsPayload)}
      </Container>
      <ui.UnderMenuPlank active={active}>
        {renderPlankContent(menuItemType)}
      </ui.UnderMenuPlank>
    </>
  );
}

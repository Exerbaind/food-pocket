import React, { useState, useEffect } from "react";
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
    2: <components.PagesBar />,
  };

  return menuList[menuItemType];
};

const handleMenu = (handleBottomMenu, handleMenuItemType, type) => {
  handleBottomMenu();
  handleMenuItemType(type);
};

const renderIcons = (iconsPayload) => {
  const { showBottomMenu, handleBottomMenu, handleMenuItemType, menuItemType } =
    iconsPayload;
  if (showBottomMenu) {
    return (
      <IconsContainer>
        <IconItem
          onClick={() =>
            handleMenu(handleBottomMenu, handleMenuItemType, menuItemType)
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
        onClick={() => handleMenu(handleBottomMenu, handleMenuItemType, 0)}
      >
        <CgSearch />
      </IconItem>
      <IconItem
        onClick={() => handleMenu(handleBottomMenu, handleMenuItemType, 1)}
      >
        <HiPlus />
      </IconItem>
      <IconItem
        onClick={() => handleMenu(handleBottomMenu, handleMenuItemType, 2)}
      >
        <CgMenu />
      </IconItem>
    </IconsContainer>
  );
};

export function Desktop() {
  const { menuItemType, showBottomMenu } = getState();
  const { handleMenuItemType, handleBottomMenu } = getActions();

  const iconsPayload = {
    showBottomMenu,
    handleBottomMenu,
    menuItemType,
    handleMenuItemType,
  };

  return (
    <>
      <Container>
        <Title>FoodPocket</Title>
        {renderIcons(iconsPayload)}
      </Container>
      <ui.UnderMenuPlank active={showBottomMenu}>
        {renderPlankContent(menuItemType)}
      </ui.UnderMenuPlank>
    </>
  );
}

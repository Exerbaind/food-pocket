import React, { useState } from "react";
import { CgSearch, CgMenu } from "react-icons/cg";
import { HiPlus } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import { SearchBar } from "..";
import { Container, Title, IconsContainer, IconItem } from "./styles";

const handleCloseMenu = ({
  setActiveSearch,
  setActivePages,
  setActiveHandler,
}) => {
  setActiveSearch(false);
  setActivePages(false);
  setActiveHandler(false);
};

const renderIcons = (iconsPayload) => {
  const {
    activeSearch,
    activePages,
    activeHandler,
    setActiveSearch,
    setActivePages,
    setActiveHandler,
  } = iconsPayload;
  if (activeSearch || activePages || activeHandler) {
    return (
      <IconsContainer>
        <IconItem onClick={() => handleCloseMenu(iconsPayload)}>
          <VscChromeClose />
        </IconItem>
      </IconsContainer>
    );
  }

  return (
    <IconsContainer>
      <IconItem onClick={() => setActiveSearch(!activeSearch)}>
        <CgSearch />
      </IconItem>
      <IconItem onClick={() => setActivePages(!activePages)}>
        <HiPlus />
      </IconItem>
      <IconItem onClick={() => setActiveHandler(!activeHandler)}>
        <CgMenu />
      </IconItem>
    </IconsContainer>
  );
};

export function TopMenu() {
  const [activeSearch, setActiveSearch] = useState(false);
  const [activePages, setActivePages] = useState(false);
  const [activeHandler, setActiveHandler] = useState(false);
  const iconsPayload = {
    activeSearch,
    setActiveSearch,
    activePages,
    setActivePages,
    activeHandler,
    setActiveHandler,
  };
  return (
    <>
      <Container>
        <Title>FoodPocket</Title>
        {renderIcons(iconsPayload)}
      </Container>
      <SearchBar active={activeSearch} />
    </>
  );
}

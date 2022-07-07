import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import SearchBar from "../SearchBar";
import { Container, Title, IconsContainer, IconItem } from "./styles";

const handleSearchBar = (iconsPayload) => {
  const { activeSearch, setActiveSearch } = iconsPayload;
  return setActiveSearch(!activeSearch);
};

const renderIcons = (iconsPayload) => {
  const { activeSearch } = iconsPayload;
  if (activeSearch) {
    return (
      <IconsContainer>
        <IconItem onClick={() => handleSearchBar(iconsPayload)}>
          <MdClose />
        </IconItem>
      </IconsContainer>
    );
  }

  return (
    <IconsContainer>
      <IconItem onClick={() => handleSearchBar(iconsPayload)}>
        <FaSearch />
      </IconItem>
    </IconsContainer>
  );
};

function TopMenu() {
  const [activeSearch, setActiveSearch] = useState(false);
  const iconsPayload = { activeSearch, setActiveSearch };
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

export default TopMenu;

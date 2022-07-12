import React from "react";
import * as ui from "../../ui";
import { data } from "./data";
import { getActions, getState } from "./state";

import { SearchBarContainer, ButtonsContainer } from "./styles";

const renderButton = (item, index, searchType, handleSearchType) => {
  const { text, type } = item;

  const activeButton = type === searchType;

  return (
    <ui.Button
      text={text}
      activeButton={activeButton}
      key={`${text}__${index}`}
      onClick={() => handleSearchType(type)}
      spaceBetween
    />
  );
};

export function SearchBar() {
  const { searchType } = getState();
  const { handleSearchType } = getActions();

  return (
    <SearchBarContainer>
      <ButtonsContainer>
        {data &&
          data.map((item, index) =>
            renderButton(item, index, searchType, handleSearchType)
          )}
      </ButtonsContainer>
    </SearchBarContainer>
  );
}

SearchBar.propTypes = {};

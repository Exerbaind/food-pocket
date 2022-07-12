import React, { useState } from "react";
import * as ui from "../../ui";
import { data } from "./data";
import { getActions, getState } from "./state";

import { SearchBarContainer, ButtonsContainer } from "./styles";

const handleInput = (value, name, formData, setFormData) => {
  return setFormData({ ...formData, [name]: value });
};

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

const renderButtonsContainer = ({ searchType, handleSearchType }) => {
  if (data) {
    return (
      <ButtonsContainer>
        {data.map((item, index) =>
          renderButton(item, index, searchType, handleSearchType)
        )}
      </ButtonsContainer>
    );
  }

  return null;
};

export function SearchBar() {
  const { searchType } = getState();
  const { handleSearchType } = getActions();

  const buttonsPayload = { searchType, handleSearchType };

  const [formData, setFormData] = useState({
    search: "",
  });

  console.log(formData);

  return (
    <SearchBarContainer>
      {renderButtonsContainer(buttonsPayload)}
      <ui.Input
        type="text"
        name="search"
        placeholder="Что будем искать?"
        onChange={(value, name) =>
          handleInput(value, name, formData, setFormData)
        }
      />
    </SearchBarContainer>
  );
}

SearchBar.propTypes = {};

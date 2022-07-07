import React from "react";
import { PropTypes } from "prop-types";
import { Container } from "./styles";

function SearchBar({ active }) {
  return (
    <Container active={active}>
      <input type="text" />
    </Container>
  );
}

SearchBar.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default SearchBar;

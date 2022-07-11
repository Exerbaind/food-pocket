import React from "react";
import { PropTypes } from "prop-types";
import * as ui from "../../ui";

export function SearchBar({ active }) {
  return (
    <ui.UnderMenuPlank active={active}>
      <input type="text" />
    </ui.UnderMenuPlank>
  );
}

SearchBar.propTypes = {
  active: PropTypes.bool.isRequired,
};

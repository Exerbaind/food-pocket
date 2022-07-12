import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

export function UnderMenuPlank({ children, active }) {
  return <Container active={active}>{children}</Container>;
}

UnderMenuPlank.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.shape({}),
};

UnderMenuPlank.defaultProps = {
  children: null,
};

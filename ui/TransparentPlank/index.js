import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

export function TransparentPlank({ children, active }) {
  return <Container active={active}>{children}</Container>;
}

TransparentPlank.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.shape({}),
};

TransparentPlank.defaultProps = {
  children: null,
};

import React from "react";
import { PropTypes } from "prop-types";
import { ContentContainer } from "./styles";

export function ContentLayout({ children }) {
  return <ContentContainer>{children}</ContentContainer>;
}

ContentLayout.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

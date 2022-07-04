import React from "react";
import { PropTypes } from "prop-types";
import { textTypes } from "./data";
import { S } from "./styles";

function HoverHint({ type, position }) {
  return (
    <S.Container className="hover-hint" position={position}>
      <S.Text>{textTypes[type]}</S.Text>
    </S.Container>
  );
}

HoverHint.propTypes = {
  type: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default HoverHint;

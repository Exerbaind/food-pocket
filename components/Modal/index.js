import React from "react";
import { PropTypes } from "prop-types";
import { S } from "./styles";

function Modal({ children, fullScreen, active }) {
  if (fullScreen) {
    return <S.FullscreenModal active={active}>{children}</S.FullscreenModal>;
  }
  return <S.Modal>Modal</S.Modal>;
}

Modal.propTypes = {
  children: PropTypes.shape({}).isRequired,
  fullScreen: PropTypes.bool,
  active: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  fullScreen: false,
};

export default Modal;

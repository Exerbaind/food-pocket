import React from "react";
import PropTypes from "prop-types";
import S from "./styles";

function AppButton({ type, text, handleAction, ...props }) {
  if (type === "primary") {
    return (
      <S.PrimaryButton onClick={handleAction} {...props}>
        {text}
      </S.PrimaryButton>
    );
  }
  if (type === "transparent") {
    return (
      <S.TransparentButton onClick={handleAction} {...props}>
        {text}
      </S.TransparentButton>
    );
  }
}

AppButton.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  handleAction: PropTypes.func,
  type: PropTypes.string.isRequired,
};

AppButton.defaultProps = {
  size: "s",
  handleAction: () => {},
};

export default AppButton;

import React from "react";
import { S } from "./styles";
import PropTypes from "prop-types";

import { checkDevice } from "../../common/utils/checkDevice";

import { FiPlus } from "react-icons/fi";

const types = {
  dish: "Добавить блюдо",
  product: "Добавить продукт",
};

function NewDataButton({ type }) {
  //   const { isMobile } = checkDevice();

  const handleAction = () => {
    console.log("tapped");
  };

  return (
    <S.Button onClick={handleAction} isMobile={false}>
      <S.ButtonIcon>
        <FiPlus color="white" />
      </S.ButtonIcon>
      <S.ButtonText>{types[type]}</S.ButtonText>
    </S.Button>
  );
}

NewDataButton.propTypes = {
  type: PropTypes.string.isRequired,
};

export default NewDataButton;

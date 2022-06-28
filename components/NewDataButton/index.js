import React from "react";
import { PropTypes } from "prop-types";

import { FiPlus } from "react-icons/fi";
import { connect } from "react-redux";
import { S } from "./styles";

import { handleModalForm } from "../../services/modalForm/modalFromSlice";

import {
  disableBodyOverflow,
  enableBodyOverflow,
} from "../../common/utils/handleBodyOverflow";

const handleModal = (showForm, handleModalFormAction) => {
  // TODO: разобраться почему !showForm, а не showForm
  if (!showForm) {
    disableBodyOverflow();
  } else {
    enableBodyOverflow();
  }
  handleModalFormAction();
};

function NewDataButton({ showForm, handleModalFormAction }) {
  const buttonText = showForm ? "Закрыть" : "Добавить";
  return (
    <S.Button
      onClick={() => handleModal(showForm, handleModalFormAction)}
      showForm={showForm}
    >
      <FiPlus color="white" />
      <S.ButtonText>{buttonText}</S.ButtonText>
    </S.Button>
  );
}

const mapStateToProps = ({ modalFormService }) => ({
  showForm: modalFormService.showForm,
});

const mapDispatchToProps = {
  handleModalFormAction: handleModalForm,
};

NewDataButton.propTypes = {
  showForm: PropTypes.bool.isRequired,
  handleModalFormAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDataButton);

import React from "react";
import { S } from "./styles";

import { FiPlus } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { connect } from "react-redux";

import { handleModalForm } from "../../services/modalForm/modalFromSlice";

function NewDataButton({ isMobile, showForm, handleModalFormAction }) {
  const buttonText = showForm ? "Закрыть" : "Добавить";
  return (
    <S.Button
      onClick={handleModalFormAction}
      isMobile={isMobile}
      showForm={showForm}
    >
      <FiPlus color="white" />
      <S.ButtonText>{buttonText}</S.ButtonText>
    </S.Button>
  );
}

const mapStateToProps = ({ appService, modalFormService }) => ({
  isMobile: appService.isMobile,
  showForm: modalFormService.showForm,
});

const mapDispatchToProps = {
  handleModalFormAction: handleModalForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDataButton);

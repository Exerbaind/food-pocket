import React from "react";
import { connect } from "react-redux";
import TabBar from "../TabBar";

import { S } from "./styles";

function ModalForm({ showForm }) {
  return (
    <S.ModalContainer showForm={showForm}>
      <S.ModalContent>
        <S.ModalTitle>Добавьте</S.ModalTitle>
        <TabBar />
      </S.ModalContent>
    </S.ModalContainer>
  );
}

const mapStateToProps = ({ modalFormService }) => ({
  showForm: modalFormService.showForm,
});

export default connect(mapStateToProps)(ModalForm);

import React from "react";
import { connect } from "react-redux";
import TabBar from "../TabBar";

import { S } from "./styles";

function ModalForm({ showForm, isMobile }) {
  return (
    <S.ModalContainer showForm={showForm} isMobile={isMobile}>
      <S.ModalContent>
        <S.ModalTitle>Добавьте</S.ModalTitle>
        <TabBar />
      </S.ModalContent>
    </S.ModalContainer>
  );
}

const mapStateToProps = ({ appService, modalFormService }) => ({
  showForm: modalFormService.showForm,
  isMobile: appService.isMobile,
});

export default connect(mapStateToProps)(ModalForm);

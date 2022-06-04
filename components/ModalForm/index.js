import React from "react";
import { connect } from "react-redux";

import TabBar from "../TabBar";
import DishForm from "./components/DishForm";
import ProductForm from "./components/ProductForm";
import MenuForm from "./components/MenuForm";
import BarcodeReader from "../../components/BarcodeReaderModal";

import { S } from "./styles";

const formsList = {
  dish: <DishForm />,
  product: <ProductForm />,
  menu: <MenuForm />,
};

function ModalForm({ showForm, currentForm, active }) {
  return (
    <S.ModalContainer showForm={showForm}>
      <S.ModalContent>
        <S.ModalTitle>Добавьте</S.ModalTitle>
        <TabBar />
        {formsList[currentForm]}
        {active && <BarcodeReader />}
      </S.ModalContent>
    </S.ModalContainer>
  );
}

const mapStateToProps = ({ modalFormService, barcodeService }) => ({
  showForm: modalFormService.showForm,
  currentForm: modalFormService.currentForm,
  active: barcodeService.active,
});

export default connect(mapStateToProps)(ModalForm);

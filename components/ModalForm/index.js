import React from 'react';
import { connect } from 'react-redux';

import TabBar from '../TabBar';
import DishForm from './components/DishForm';
import ProductForm from './components/ProductForm';
import MenuForm from './components/MenuForm';

import { S } from './styles';

const formsList = {
  dish: <DishForm />,
  product: <ProductForm />,
  menu: <MenuForm />,
};

function ModalForm({ showForm, currentForm }) {
  return (
    <S.ModalContainer showForm={showForm}>
      <S.ModalContent>
        <S.ModalTitle>Добавьте</S.ModalTitle>
        <TabBar />
        {formsList[currentForm]}
      </S.ModalContent>
    </S.ModalContainer>
  );
}

const mapStateToProps = ({ modalFormService }) => ({
  showForm: modalFormService.showForm,
  currentForm: modalFormService.currentForm,
});

export default connect(mapStateToProps)(ModalForm);

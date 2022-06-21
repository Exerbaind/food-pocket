import React, { useState } from 'react';
import { connect } from 'react-redux';
import fetchRequest from '../../../../common/utils/fetchRequest';
import AppInput from '../../../AppInput';

import { S } from '../styles';

import { handleShowMessage } from '../../../../services/message/messageSlice';
import { handleModalForm } from '../../../../services/modalForm/modalFromSlice';
import { handleBarcode } from '../../../../services/barcode/barcodeSlice';
import BarcodeReader from '../../../BarcodeReader';

const propsList = {
  nutritions: 'calories,proteins,fats,carbohydrates',
};

const handleSubmit = async (
  e,
  formData,
  handleModalFormAction,
  handleShowMessageAction,
) => {
  e.preventDefault();
  try {
    const response = await fetchRequest('/api/product', 'POST', formData);
    if (response && response.message) {
      handleModalFormAction();
      handleShowMessageAction(response.message);
    }
    // TODO: создать сервис, задиспатчить успешную отправку данных data['message']/data['success']
  } catch (error) {
    console.error(error);
  }
};

const handleChange = (value, name, setFormData, formData) => {
  if (propsList.nutritions.indexOf(name) !== -1) {
    return setFormData({
      ...formData,
      nutritions: { ...formData.nutritions, [name]: value },
    });
  }
  return setFormData({ ...formData, [name]: value });
};

const handleBlur = (
  error,
  name,
  valid,
  fieldsValidation,
  setFieldsValidation,
) => setFieldsValidation({
  ...fieldsValidation,
  [name]: { error, isValid: valid },
});

function ProductForm({
  handleModalFormAction,
  handleShowMessageAction,
  handleBarcodeAction,
  barcodeActive,
  barcodeData,
}) {
  const [formData, setFormData] = useState({
    productName: '',
    barcode: barcodeData,
    nutritions: {
      calories: null,
      proteins: null,
      fats: null,
      carbohydrates: null,
    },
    // portion: "",
    // weight: null, // Если выбран вариант на 100 грмм порция, то покказывать это поле
  });
  const [fieldsValidation, setFieldsValidation] = useState({
    productName: {
      error: '',
      isValid: false,
    },
    barcode: {
      error: '',
      isValid: false,
    },
    calories: {
      error: '',
      isValid: false,
    },
    proteins: {
      error: '',
      isValid: false,
    },
    fats: {
      error: '',
      isValid: false,
    },
    carbohydrates: {
      error: '',
      isValid: false,
    },
  });

  return (
    <S.Form
      onSubmit={(e) => handleSubmit(
        e,
        formData,
        handleModalFormAction,
        handleShowMessageAction,
      )}
    >
      <AppInput
        type="text"
        name="productName"
        label="Название продукта"
        onChange={(value, name) => handleChange(value, name, setFormData, formData)}
        onBlur={(error, name, valid) => handleBlur(error, name, valid, fieldsValidation, setFieldsValidation)}
        required
      />
      <AppInput
        type="number"
        name="barcode"
        label="Штрих-код"
        icon="camera"
        onChange={(value, name) => handleChange(value, name, setFormData, formData)}
        onBlur={(error, name, valid) => handleBlur(error, name, valid, fieldsValidation, setFieldsValidation)}
        onIconMethod={handleBarcodeAction}
        required
      />
      {barcodeActive && <BarcodeReader />}
      <AppInput
        type="number"
        name="calories"
        label="Количество калорий"
        onChange={(value, name) => handleChange(value, name, setFormData, formData)}
        onBlur={(error, name, valid) => handleBlur(error, name, valid, fieldsValidation, setFieldsValidation)}
        required
      />
      <AppInput
        type="number"
        name="proteins"
        label="Количество белков"
        onChange={(value, name) => handleChange(value, name, setFormData, formData)}
        onBlur={(error, name, valid) => handleBlur(error, name, valid, fieldsValidation, setFieldsValidation)}
        required
      />
      <AppInput
        type="number"
        name="fats"
        label="Количество жиров"
        onChange={(value, name) => handleChange(value, name, setFormData, formData)}
        onBlur={(error, name, valid) => handleBlur(error, name, valid, fieldsValidation, setFieldsValidation)}
        required
      />
      <AppInput
        type="number"
        name="carbohydrates"
        label="Количество углеводов"
        onChange={(value, name) => handleChange(value, name, setFormData, formData)}
        onBlur={(error, name, valid) => handleBlur(error, name, valid, fieldsValidation, setFieldsValidation)}
        required
      />
      <AppInput
        type="submit"
        buttonText="Отправить"
        buttonState={fieldsValidation}
      />
    </S.Form>
  );
}

const mapStateToProps = ({ barcodeService }) => ({
  barcodeActive: barcodeService.active,
  barcodeData: barcodeService.barcode,
});

const mapDispatchToProps = {
  handleShowMessageAction: handleShowMessage,
  handleModalFormAction: handleModalForm,
  handleBarcodeAction: handleBarcode,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);

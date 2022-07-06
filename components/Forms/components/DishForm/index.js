import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import fetchRequest from "../../../../common/utils/fetchRequest";
import AppInput from "../../../AppInput";

import { S } from "../../styles";

import { handleShowMessage } from "../../../../services/message/messageSlice";
import { handleModal } from "../../../../services/modal/modalSlice";
import UploadInput from "../../../UploadInput";
import { noImageBase64 } from "../../../../common/styles/constants";

const propsList = {
  nutritions: "calories,proteins,fats,carbohydrates",
};

const handleSubmit = async (
  e,
  formData,
  handleModalAction,
  handleShowMessageAction
) => {
  e.preventDefault();
  try {
    const response = await fetchRequest("/api/dish", "POST", formData);
    if (response && response.message) {
      handleModalAction();
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
  setFieldsValidation
) =>
  setFieldsValidation({
    ...fieldsValidation,
    [name]: { error, isValid: valid },
  });

function DishForm({ handleModalAction, handleShowMessageAction, isMobile }) {
  const [formData, setFormData] = useState({
    place: "",
    dishName: "",
    nutritions: {
      calories: null,
      proteins: null,
      fats: null,
      carbohydrates: null,
    },
    image: noImageBase64,
    // portion: "",
    // weight: null, // Если выбран вариант на 100 грмм порция, то покказывать это поле
  });
  const [fieldsValidation, setFieldsValidation] = useState({
    place: {
      error: "",
      isValid: false,
    },
    dishName: {
      error: "",
      isValid: false,
    },
    calories: {
      error: "",
      isValid: false,
    },
    proteins: {
      error: "",
      isValid: false,
    },
    fats: {
      error: "",
      isValid: false,
    },
    carbohydrates: {
      error: "",
      isValid: false,
    },
  });

  return (
    <S.Form
      onSubmit={(e) =>
        handleSubmit(e, formData, handleModalAction, handleShowMessageAction)
      }
    >
      <AppInput // TODO: сделать селект из заведений, с возможностью вводить и выбирать уже из имеющихся
        type="text"
        name="place"
        label="Название заведения"
        placeholder="Например, KFC"
        onChange={(value, name) =>
          handleChange(value, name, setFormData, formData)
        }
        onBlur={(error, name, valid) =>
          handleBlur(error, name, valid, fieldsValidation, setFieldsValidation)
        }
        required
      />
      <AppInput
        type="text"
        name="dishName"
        label="Название блюда"
        placeholder="Название из меню"
        onChange={(value, name) =>
          handleChange(value, name, setFormData, formData)
        }
        onBlur={(error, name, valid) =>
          handleBlur(error, name, valid, fieldsValidation, setFieldsValidation)
        }
        required
      />
      <AppInput
        type="number"
        name="calories"
        label="Количество калорий"
        onChange={(value, name) =>
          handleChange(value, name, setFormData, formData)
        }
        onBlur={(error, name, valid) =>
          handleBlur(error, name, valid, fieldsValidation, setFieldsValidation)
        }
        required
      />
      {/* TODO: добавить состав блюда */}
      <AppInput
        type="number"
        name="proteins"
        label="Количество белков"
        onChange={(value, name) =>
          handleChange(value, name, setFormData, formData)
        }
        onBlur={(error, name, valid) =>
          handleBlur(error, name, valid, fieldsValidation, setFieldsValidation)
        }
        required
      />
      <AppInput
        type="number"
        name="fats"
        label="Количество жиров"
        onChange={(value, name) =>
          handleChange(value, name, setFormData, formData)
        }
        onBlur={(error, name, valid) =>
          handleBlur(error, name, valid, fieldsValidation, setFieldsValidation)
        }
        required
      />
      <AppInput
        type="number"
        name="carbohydrates"
        label="Количество углеводов"
        onChange={(value, name) =>
          handleChange(value, name, setFormData, formData)
        }
        onBlur={(error, name, valid) =>
          handleBlur(error, name, valid, fieldsValidation, setFieldsValidation)
        }
        required
      />
      {isMobile && (
        <UploadInput
          onUpload={(image) =>
            handleChange(image, "image", setFormData, formData)
          }
        />
      )}
      <AppInput
        type="submit"
        buttonText="Отправить"
        buttonState={fieldsValidation}
      />
    </S.Form>
  );
}

const mapDispatchToProps = {
  handleShowMessageAction: handleShowMessage,
  handleModalAction: handleModal,
};

const mapStateToProps = ({ appService }) => ({
  isMobile: appService.isMobile,
});

DishForm.propTypes = {
  handleModalAction: PropTypes.func.isRequired,
  handleShowMessageAction: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DishForm);

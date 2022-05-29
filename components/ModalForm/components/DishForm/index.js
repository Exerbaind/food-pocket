import React, { useState } from "react";
import AppInput from "../../../AppInput";
import { S } from "../styles";

const handleSubmit = async (e, formData) => {
  e.preventDefault();
  try {
    const response = await fetch("api/dish", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
};

const handleChange = (value, name, setFormData, formData) => {
  if (
    name === "calories" ||
    name === "proteins" ||
    name === "fats" ||
    name === "carbohydrates"
  ) {
    return setFormData({
      ...formData,
      nutritions: { ...formData.nutritions, [name]: value },
    });
  }
  return setFormData({ ...formData, [name]: value });
};

function DishForm() {
  const [formData, setFormData] = useState({
    place: "",
    dishName: "",
    nutritions: {
      calories: null,
      proteins: null,
      fats: null,
      carbohydrates: null,
    },
    //portion: "",
    //weight: null, // Если выбран вариант на 100 грмм порция, то покказывать это поле
  });

  return (
    <S.Form onSubmit={(e) => handleSubmit(e, formData)}>
      <AppInput // TODO: сделать селект из заведений, с возможностью вводить и выбирать уже из имеющихся
        type="text"
        name="place"
        label="Название заведения"
        onChange={(value, name) =>
          handleChange(value, name, setFormData, formData)
        }
        required
      />
      <AppInput
        type="text"
        name="dishName"
        label="Название блюда"
        onChange={(value, name) =>
          handleChange(value, name, setFormData, formData)
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
        required
      />
      <AppInput
        type="number"
        name="proteins"
        label="Количество белков"
        onChange={(value, name) =>
          handleChange(value, name, setFormData, formData)
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
        required
      />
      <AppInput
        type="number"
        name="carbohydrates"
        label="Количество углеводов"
        onChange={(value, name) =>
          handleChange(value, name, setFormData, formData)
        }
        required
      />
      <AppInput type="submit" buttonText="Отправить" />
    </S.Form>
  );
}

export default DishForm;

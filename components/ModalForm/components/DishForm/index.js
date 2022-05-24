import React, { useState } from "react";
import AppInput from "../../../AppInput";
import { S } from "../styles";

const handleChange = (value, name, setFormData, formData) => {
  setFormData({ ...formData, [name]: value });
};

function DishForm() {
  const [formData, setFormData] = useState({
    place: "",
  });

  return (
    <S.Form>
      <AppInput
        type="text"
        name="place"
        label="Название заведения"
        onChange={(value, name) =>
          handleChange(value, name, setFormData, formData)
        }
        required
      />
    </S.Form>
  );
}

export default DishForm;

import React from "react";
import AppInput from "../../../AppInput";
import { S } from "../styles";

function ProductForm() {
  return (
    <S.Form>
      <AppInput type="text" name="product" label="Название продукта" />
    </S.Form>
  );
}

export default ProductForm;

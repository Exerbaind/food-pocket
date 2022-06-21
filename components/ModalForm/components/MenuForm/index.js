import React from 'react';
import AppInput from '../../../AppInput';
import { S } from '../styles';

function MenuForm() {
  return (
    <S.Form>
      <AppInput type="text" name="menu" label="Меню" />
    </S.Form>
  );
}

export default MenuForm;

import React from "react";
import PropTypes from "prop-types";

import { InputContainer, InputField } from "./styles";

const handleChange = (e, onChange) => {
  const { value } = e.target;
  const { name } = e.target;

  return onChange(value, name);
};

export function Input({ type, name, onChange, onBlur, placeholder }) {
  return (
    <InputContainer>
      <InputField
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => handleChange(e, onChange)}
      />
    </InputContainer>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: null,
};

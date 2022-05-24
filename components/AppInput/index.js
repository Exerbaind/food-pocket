import React from "react";
import { S } from "./styles";
import PropTypes from "prop-types";

const handleChange = (e, onChange) => {
  onChange(e.target.value, e.target.name);
};

function AppInput({
  type,
  name,
  label,
  placeholder,
  required,
  onChange,
  buttonText,
}) {
  if (type === "submit") {
    return <S.InputButton type={type} value={buttonText} />;
  }
  return (
    <S.Input>
      {label && (
        <S.InputLabel htmlFor={name}>
          {label}
          {required && "*"}
        </S.InputLabel>
      )}
      <S.InputField
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        onChange={(e) => handleChange(e, onChange)}
      />
    </S.Input>
  );
}

AppInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
};

AppInput.defaultProps = {
  label: null,
  placeholder: null,
  required: false,
  buttonText: "",
};

export default AppInput;

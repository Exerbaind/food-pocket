import React, { useState } from "react";
import { S } from "./styles";
import PropTypes from "prop-types";
import { buttonValidator, fieldsValidator } from "./validators";

const handleChange = (e, onChange) => {
  onChange(e.target.value, e.target.name);
};

const handleBlur = (e, type, setError, setValid, setSuccess, onBlur) => {
  const value = e.target.value;
  const name = e.target.name;
  const isValid = fieldsValidator(type, value);
  const { error, valid } = isValid;
  if (valid) {
    setSuccess(valid);
    setError(error);
    setValid(valid);
    return onBlur(error, name, valid);
  }
  setSuccess(valid);
  setError(error);
  setValid(valid);
  return onBlur(error, name, valid);
};

function AppInput({
  type,
  name,
  label,
  placeholder,
  required,
  onChange,
  onBlur,
  buttonText,
  buttonState,
}) {
  const [error, setError] = useState("");
  const [valid, setValid] = useState(false);
  const [success, setSuccess] = useState(false);

  if (type === "submit") {
    return (
      <S.InputButton type={type} disabled={buttonValidator(buttonState)}>
        {buttonText}
      </S.InputButton>
    );
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
        onBlur={(e) =>
          handleBlur(e, type, setError, setValid, setSuccess, onBlur)
        }
        error={error}
        success={success}
      />
      {!!error && <S.InputError>{error}</S.InputError>}
    </S.Input>
  );
}

AppInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  buttonText: PropTypes.string,
  buttonState: PropTypes.shape({}),
};

AppInput.defaultProps = {
  name: null,
  label: null,
  placeholder: null,
  required: false,
  buttonText: "",
  buttonState: null,
  onChange: () => {},
  onBlur: () => {},
};

export default AppInput;

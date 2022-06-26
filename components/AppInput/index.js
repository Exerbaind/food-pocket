import React, { useState } from "react";
import PropTypes from "prop-types";
import { HiCamera } from "react-icons/hi";
import { S } from "./styles";
import { buttonValidator, fieldsValidator } from "./validators";

const renderIcon = (icon, onIconMethod) => {
  if (icon === "camera") {
    return (
      <S.InputIcon onClick={onIconMethod}>
        <HiCamera color="rgba(38, 135, 92, 1)" />
      </S.InputIcon>
    );
  }

  return null;
};

const handleChange = (e, onChange) => {
  onChange(e.target.value, e.target.name);
};

const handleBlur = (e, type, setError, setValid, setSuccess, onBlur) => {
  const { value } = e.target;
  const { name } = e.target;
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
  icon,
  onIconMethod,
  value,
}) {
  const [error, setError] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [valid, setValid] = useState(false);
  const [success, setSuccess] = useState(false);

  if (type === "submit") {
    return (
      <S.InputButton
        value={buttonText}
        type={type}
        disabled={buttonValidator(buttonState)}
      />
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
      <S.InputBlock icon={icon}>
        <S.InputField
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={(e) => handleChange(e, onChange)}
          onBlur={(e) =>
            handleBlur(e, type, setError, setValid, setSuccess, onBlur)
          }
          error={error}
          success={success}
          step="0.01"
        />
        {icon && renderIcon(icon, onIconMethod)}
      </S.InputBlock>
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
  icon: PropTypes.string,
  onIconMethod: PropTypes.func,
  value: PropTypes.number,
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
  onIconMethod: () => {},
  icon: null,
  value: undefined,
};

export default AppInput;

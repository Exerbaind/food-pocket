export const buttonValidator = (data) => {
  if (data) {
    const array = Object.values(data).map((value) => value.isValid);
    const isEnabled = array.every((item) => item === true);

    if (isEnabled) {
      return false;
    }

    return true;
  }

  return false;
};

const textValidator = (value) => {
  if (value.length < 1) {
    return {
      error: "Обязательное поле",
      valid: false,
    };
  }

  return {
    error: "",
    valid: true,
  };
};

const numberValidator = (value) => {
  if (value.length < 1) {
    return {
      error: "Обязательное поле",
      valid: false,
    };
  }

  return {
    error: "",
    valid: true,
  };
};

// eslint-disable-next-line consistent-return
export const fieldsValidator = (type, value) => {
  if (type === "text") return textValidator(value);
  if (type === "number") return numberValidator(value);
};

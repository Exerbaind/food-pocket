import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { S } from "./styles";

function UploadInput() {
  const [image, setImage] = useState(null);
  return (
    <S.UploadContainer>
      <input type="file" name="file" />
    </S.UploadContainer>
  );
}

UploadInput.propTypes = {};

export default UploadInput;

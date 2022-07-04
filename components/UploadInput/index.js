import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { MdOutlineDeleteForever } from "react-icons/md";
import { S } from "./styles";
import { noImageBase64 } from "../../common/styles/constants";

const convertToBase64 = (file, setImage, setLoading, onUpload) => {
  const reader = new FileReader();
  setLoading(true);
  reader.onloadend = () => {
    setImage(reader.result);
    setLoading(false);
    onUpload(reader.result);
  };
  reader.readAsDataURL(file);
};

const handleUpload = (e, setImage, setLoading, onUpload) => {
  if (e.target.files["0"]) {
    const file = e.target.files["0"];
    return convertToBase64(file, setImage, setLoading, onUpload);
  }

  return null;
};

const deleteImage = (setImage, onUpload) => {
  setImage(null);
  onUpload(noImageBase64);
};

const renderImage = (image, setImage, onUpload) => {
  return (
    <S.UploadedImage image={image}>
      <S.ImagePlank>
        <MdOutlineDeleteForever
          color="white"
          onClick={() => deleteImage(setImage, onUpload)}
        />
      </S.ImagePlank>
    </S.UploadedImage>
  );
};

const renderInput = (loading, setImage, setLoading, onUpload) => {
  const labelText = loading ? "Идет загрузка..." : "Загрузить фото";

  return (
    <S.UploadInput>
      <S.CustomizedUpload htmlFor="imageUpload">{labelText}</S.CustomizedUpload>
      <S.HiddenUpload
        type="file"
        name="file"
        id="imageUpload"
        onChange={(e) => handleUpload(e, setImage, setLoading, onUpload)}
      />
    </S.UploadInput>
  );
};

const renderContent = ({ image, loading, setImage, setLoading, onUpload }) => {
  if (image) {
    return renderImage(image, setImage, onUpload);
  }

  return renderInput(loading, setImage, setLoading, onUpload);
};

function UploadInput({ multiple, onUpload }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const contentPayload = { image, loading, setImage, setLoading, onUpload };

  if (multiple) {
    return <p>multiple input</p>;
  }

  return (
    <S.UploadContainer image={image}>
      {renderContent(contentPayload)}
    </S.UploadContainer>
  );
}

UploadInput.propTypes = {
  multiple: PropTypes.bool,
  onUpload: PropTypes.func.isRequired,
};

UploadInput.defaultProps = {
  multiple: false,
};

export default UploadInput;

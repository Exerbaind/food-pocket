import styled, { css } from "styled-components";
import { MAIN_COLORS, TEXT_COLORS } from "../../common/styles/styles";

export const S = {};

S.UploadContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  border: 2px dashed
    ${({ image }) => (image ? MAIN_COLORS.green : "rgba(242, 244, 247, 1)")};
  border-radius: 5px;
  height: 200px;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
`;

S.UploadInput = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.CustomizedUpload = styled.label`
  padding: 10px 20px;
  background-color: ${MAIN_COLORS.green};
  border-radius: 5px;
  border: none;
  color: ${TEXT_COLORS.whiteText};
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: rgba(38, 135, 92, 0.7);
  }

  &:active {
    background-color: rgba(38, 135, 92, 1);
  }
`;

S.HiddenUpload = styled.input`
  display: none;
`;

S.UploadedImage = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  ${({ image }) =>
    image &&
    css`
      background-image: url(${image});
    `}
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 5px;
`;

// S.DeleteImage = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   background-color: rgba(144, 0, 32, 1);
//   height: 25px;
//   width: 25px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 5;
//   border-radius: 50%;
//   transform: translate(30%, -30%);
//   svg {
//     transform: rotate(45deg);
//   }
// `;

S.ImagePlank = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  padding: 5px 10px;
  display: flex;
  border-radius: 5px;
`;

import styled, { css } from "styled-components";
import { MAIN_COLORS } from "../../common//styles/styles";

export const S = {};

S.ModalContainer = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${MAIN_COLORS.white};
  display: flex;
  justify-content: center;
  padding: 50px 0;
  opacity: 0;
  visibility: hidden;
  z-index: -1;
  transition: 0.3s;

  ${({ showForm }) =>
    showForm &&
    css`
      opacity: 1;
      visibility: visible;
      z-index: 5;
    `}
`;

S.ModalContent = styled.div`
  width: 700px;
`;

S.ModalTitle = styled.p`
  font-size: 32px;
  color: ${MAIN_COLORS.green};
  font-family: "Rubik-Medium";
  text-align: center;
`;

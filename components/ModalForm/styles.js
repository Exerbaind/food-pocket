import styled, { css } from "styled-components";
import { MAIN_COLORS, BREAKPOINTS } from "../../common//styles/styles";

export const S = {};

S.ModalContainer = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${MAIN_COLORS.white};
  display: flex;
  justify-content: center;
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
      overflow-y: auto;
    `}

  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding: 20px 0 50px 0;
  }
`;

S.ModalContent = styled.div`
  min-height: 100vh;
  width: 700px;
  margin-top: 50px;
  margin-bottom: 150px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding: 0 16px;
    margin-top: 20px;
  }
`;

S.ModalTitle = styled.p`
  font-size: 32px;
  color: ${MAIN_COLORS.green};
  font-family: "Rubik-Medium";
  text-align: center;
`;

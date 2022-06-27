import styled, { css } from "styled-components";
import { MAIN_COLORS, BREAKPOINTS } from "../../common/styles/styles";

export const S = {};

S.ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${MAIN_COLORS.white};
  display: flex;
  justify-content: center;
  overflow-y: auto;
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
  height: 100%;

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
  margin-top: 50px;
`;

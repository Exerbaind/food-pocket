import styled, { css } from "styled-components";
import { MAIN_COLORS } from "../../common/styles/styles";

export const S = {};

S.Button = styled.button`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 25px 10px 20px;
  border-radius: 20px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ showForm }) =>
    showForm ? MAIN_COLORS.red : MAIN_COLORS.green};
  z-index: 10;
  opacity: 1;
  visibility: visible;
  cursor: pointer;
  transition: 0.3s;

  ${({ isMobile }) =>
    isMobile &&
    css`
      padding: 10px 0;
      width: 95%;
      bottom: ${({ showForm }) => (showForm ? "-10px" : "50px")};
    `}

  &:hover {
    background-color: ${({ showForm }) =>
      showForm ? "rgba(144, 0, 32, 0.7)" : "rgba(38, 135, 92, 0.7)"};
  }

  &:active {
    background-color: ${({ showForm }) =>
      showForm ? "rgba(144, 0, 32, 1)" : "rgba(38, 135, 92, 1)"};
  }

  svg {
    width: 25px;
    height: 100%;
    transform: ${({ showForm }) => (showForm ? "rotate(45deg)" : "rotate(0)")};
    transition: 0.3s;
  }
`;

S.ButtonText = styled.p`
  color: ${MAIN_COLORS.white};
  font-size: 16px;
  margin-left: 5px;
  user-select: none;
`;

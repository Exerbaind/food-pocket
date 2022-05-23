import styled, { css } from "styled-components";
import { MAIN_COLORS } from "../../common/styles/styles";

export const S = {};

S.Button = styled.button`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${MAIN_COLORS.green};
  z-index: 5;
  cursor: pointer;
  transition: 0.3s;

  ${({ isMobile }) =>
    isMobile &&
    css`
      padding: 10px 0;
      width: 95%;
      bottom: 50px;
    `}

  &:hover {
    background-color: rgba(38, 135, 92, 0.7);
  }

  &:active {
    background-color: rgba(38, 135, 92, 1);
  }
`;

S.ButtonIcon = styled.div`
  height: 100%;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    height: 100%;
    width: 100%;
  }
`;

S.ButtonText = styled.p`
  color: ${MAIN_COLORS.white};
  font-size: 16px;
  margin-left: 5px;
  user-select: none;
`;

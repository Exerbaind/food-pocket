import styled from "styled-components";
import { TEXT_COLORS, THEME_COLORS } from "../../common/styles/styles";

const sizeList = {
  s: "35px",
  m: "45px",
  l: "55px",
};

export const S = {};

S.PrimaryButton = styled.button`
  height: ${({ size }) => sizeList[size]};
  background-color: ${THEME_COLORS.primary};
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 5px;
  border: none;
  color: ${TEXT_COLORS.whiteText};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: rgba(38, 135, 92, 0.7);
  }

  &:active {
    background-color: rgba(38, 135, 92, 1);
  }
`;

S.TransparentButton = styled.button`
  height: ${({ size }) => sizeList[size]};
  background-color: ${THEME_COLORS.white};
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 5px;
  border: 1px solid ${TEXT_COLORS.blackText};
  color: ${TEXT_COLORS.blackText};
  cursor: pointer;
`;

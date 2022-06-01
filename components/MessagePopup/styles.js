import styled from "styled-components";
import { css } from "styled-components";
import { MAIN_COLORS, TEXT_COLORS } from "../../common/styles/styles";

export const S = {};

S.MessageContainer = styled.div`
  position: fixed;
  top: 70px;
  right: 10px;
  background-color: rgba(38, 135, 92, 0.6);
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  z-index: -1;
  transition: 0.3s;

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      visibility: visible;
      z-index: 20;
    `}
`;

S.MessageText = styled.p`
  color: ${TEXT_COLORS.whiteText};
  font-size: 14px;
  margin-left: 5px;
`;

import styled, { css } from "styled-components";

import { COLORS, BORDER_RADIUS } from "../../common/styles/styles";

export const ButtonLink = styled.a`
  padding: 5px 10px;
  background-color: ${COLORS.grey};
  border-radius: ${BORDER_RADIUS.standard};
  margin-left: 10px;
  cursor: pointer;
  color: ${COLORS.black};
  font-size: 15px;
  user-select: none;
  transition: 0.3s;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 16px;
  }

  &:hover {
    background-color: ${COLORS.white};
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${COLORS.primary};
      color: ${COLORS.white};

      &:hover {
        background-color: ${COLORS.primary};
      }
    `}
`;

export const Button = styled.div`
  padding: 5px 10px;
  background-color: ${COLORS.grey};
  border-radius: ${BORDER_RADIUS.standard};
  margin-left: 10px;
  cursor: pointer;
  color: ${COLORS.black};
  font-size: 15px;
  user-select: none;
  transition: 0.3s;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      text-align: center;
      padding: 5px 0;
    `}

  ${({ lastChildMargin }) =>
    lastChildMargin &&
    css`
      &:last-child {
        margin-right: 16px;
      }
    `}

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    background-color: ${COLORS.white};
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${COLORS.primary};
      color: ${COLORS.white};

      &:hover {
        background-color: ${COLORS.primary};
      }
    `}
`;

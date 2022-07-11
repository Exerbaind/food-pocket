import styled, { css } from "styled-components";
import { BORDER_RADIUS, COLORS } from "../../common/styles/styles";

export const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const Item = styled.a`
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

import styled from "styled-components";
import { BORDER_RADIUS, COLORS, BREAKPOINTS } from "../../common/styles/styles";

export const Container = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
`;

export const Text = styled.p`
  padding: 5px 0;
  color: ${COLORS.primary};
  font-size: 16px;
  user-select: none;
  font-family: "Rubik-Medium";
`;

export const List = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const Item = styled.p`
  padding: 5px 10px;
  background-color: ${COLORS.grey};
  border-radius: ${BORDER_RADIUS.standard};
  margin-left: 10px;
  cursor: pointer;
  color: ${COLORS.black};
  font-size: 15px;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background-color: ${COLORS.white};
  }

  &:last-child {
    margin-right: 16px;
  }
`;

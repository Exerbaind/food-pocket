import styled from "styled-components";
import { BORDER_RADIUS, COLORS } from "../../common/styles/styles";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Text = styled.p`
  padding: 5px 10px;
  color: ${COLORS.primary};
  font-size: 16px;
  user-select: none;
`;

export const List = styled.div`
  display: flex;
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

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    background-color: ${COLORS.white};
  }
`;

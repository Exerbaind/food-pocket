import styled from "styled-components";
import { COLORS } from "../../common/styles/styles";

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
  margin-right: 10px;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

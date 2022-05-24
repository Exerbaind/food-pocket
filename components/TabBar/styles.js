import styled, { css } from "styled-components";
import { MAIN_COLORS } from "../../common/styles/styles";

export const S = {};

const activeTabPositions = {
  dish: "left: 3px;",
  product: "left: 50%; transform: translateX(-50%);",
  menu: "left: calc(100% - 3px); transform: translateX(-100%);",
};

S.TabBarContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  position: relative;
  height: 40px;
  background-color: rgba(38, 135, 92, 0.3);
  border-radius: 5px;
  overflow-x: auto;
`;

S.TabBar = styled.div`
  width: 100%;
  min-width: 500px;
  height: 100%;
  position: absolute;
  display: flex;
  padding: 3px;
`;

S.Tab = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  z-index: 2;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: rgba(38, 135, 92, 0.4);
  }
`;

S.TabName = styled.p`
  font-size: 16px;
  color: ${MAIN_COLORS.white};
`;

S.ActiveTab = styled.div`
  position: absolute;
  height: calc(100% - 6px);
  top: 3px;
  width: 33%;
  background-color: rgba(38, 135, 92, 1);
  border-radius: 5px;
  transition: 0.3s;

  ${({ currentForm }) =>
    currentForm &&
    css`
      ${activeTabPositions[currentForm]}
    `}
`;

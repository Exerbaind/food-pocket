import styled, { css } from "styled-components";
import { MAIN_COLORS, Z_INDEX_LIST } from "../../../common/styles/styles";

export const S = {};

S.Menu = styled.div`
  position: fixed;
  bottom: ${({ showForm }) => (showForm ? "-60px" : "0")};
  left: 0;
  height: 60px;
  width: 100vw;
  background-color: ${MAIN_COLORS.white};
  box-shadow: 0px -2px 5px -5px rgba(34, 60, 80, 0.6);
  z-index: ${Z_INDEX_LIST["2"]};
  transition: 0.3s;
  ${({ active }) =>
    active &&
    css`
      height: calc(100% - 50px);
    `}
`;

S.MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 3fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

S.MenuItem = styled.div`
  width: 100%;
`;

S.MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px 0;

  ${({ active }) =>
    active &&
    css`
      background-color: ${MAIN_COLORS.green};
      &:hover {
        background-color: ${MAIN_COLORS.green};
      }
      svg {
        color: ${MAIN_COLORS.white} !important;
      }
      p {
        color: ${MAIN_COLORS.white} !important;
      }
    `}
`;

S.MenuItemIcon = styled.div`
  width: 30px;
  svg {
    height: 100%;
    width: 100%;
  }
`;

S.MenuItemName = styled.p`
  width: 100%;
  font-size: 14px;
  color: ${MAIN_COLORS.green};
  text-align: center;
`;

S.MenuHandler = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${MAIN_COLORS.green};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 100%;
    width: 50%;
  }
`;

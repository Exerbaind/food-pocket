import styled, { css } from "styled-components";
import {
  MAIN_COLORS,
  TEXT_COLORS,
  Z_INDEX_LIST,
} from "../../../common/styles/styles";

export const S = {};

S.Menu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ showModal }) => (showModal ? "-250px" : "0")};
  width: ${({ active }) => (active ? "250px" : "50px")};
  height: 100%;
  background-color: ${MAIN_COLORS.white};
  box-shadow: 2px 0px 5px -5px rgba(34, 60, 80, 0.6);
  transition: 0.3s;
  z-index: ${Z_INDEX_LIST["2"]};
  overflow: hidden;
`;

S.MenuHandler = styled.button`
  width: 100%;
  background-color: ${MAIN_COLORS.green};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: rgba(38, 135, 92, 0.7);
  }

  &:active {
    background-color: rgba(38, 135, 92, 1);
  }

  svg {
    width: 70%;
    height: 70%;
  }
`;

S.MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

S.DownloadItem = styled.div`
  width: 100%;
  max-height: 50px;
  overflow: hidden;
  transition: 0.3s;

  ${({ active }) =>
    active &&
    css`
      max-height: 500px;
    `}
`;

S.DownloadContainer = styled.div`
  width: 100%;
  align-items: center;
  display: block;
  padding: 5px 10px;
  display: flex;
  cursor: pointer;
  background-color: rgba(128, 128, 128, 0.1);
  transition: 0.3s;

  &:hover {
    background-color: rgba(128, 128, 128, 0.2);
  }
  &:active {
    background-color: rgba(128, 128, 128, 0.3);
  }
`;

S.DownloadIcon = styled.div`
  min-width: 30px;
  min-height: 40px;
  display: flex;
  align-items: center;
  transition: 0.3s;

  ${({ active }) =>
    active &&
    css`
      transform: rotate(45deg);
    `}

  svg {
    height: 100%;
    width: 100%;
  }
`;

S.DownloadText = styled.p`
  font-size: 18px;
  color: ${TEXT_COLORS.blackText};
  margin-left: 10px;
  white-space: nowrap;
`;

S.DownloadList = styled.div`
  max-height: ${({ active }) => (active ? "500px" : 0)};
  transition: 0.3s;
`;

S.DownloadListItem = styled.p`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 5px 10px 5px 50px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: rgba(128, 128, 128, 0.07);
  }

  &:active {
    background-color: rgba(128, 128, 128, 0.15);
  }
`;

S.MenuItem = styled.li`
  width: 100%;
  height: 50px;
`;

S.MenuItemLink = styled.a`
  width: 100%;
  align-items: center;
  display: block;
  padding: 5px 10px;
  display: flex;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: rgba(38, 135, 92, 0.7);
    svg {
      color: ${MAIN_COLORS.white} !important;
    }
    p {
      color: ${MAIN_COLORS.white} !important;
    }
  }

  &:active {
    background-color: rgba(38, 135, 92, 1);
  }

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

S.MenuItemName = styled.p`
  font-size: 18px;
  color: ${({ active }) => (active ? MAIN_COLORS.white : MAIN_COLORS.green)};
  margin-left: 10px;
  white-space: nowrap;
`;

S.MenuItemIcon = styled.div`
  min-width: 30px;
  min-height: 40px;
  display: flex;
  align-items: center;

  svg {
    height: 100%;
    width: 100%;
  }
`;

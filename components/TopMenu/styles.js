import styled from "styled-components";

import {
  BORDER_RADIUS,
  BREAKPOINTS,
  Z_INDEX_LIST,
  COLORS,
} from "../../common/styles/styles";

export const Container = styled.div`
  position: fixed;
  top: 10px;
  height: 45px;
  width: 1200px;
  border-radius: ${BORDER_RADIUS.standard};
  ${COLORS.bluredBackground};
  backdrop-filter: blur(3px);
  z-index: ${Z_INDEX_LIST.last};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: calc(100% - 32px);
    justify-content: flex-start;
  }
`;

export const Title = styled.p`
  font-size: 28px;
  color: ${COLORS.primary};
  font-family: "Rubik-Bold";
  text-align: center;
  user-select: none;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: calc(100% - 32px);
    margin-left: 20px;
    text-align: left;
    font-size: 22px;
  }
`;

export const IconsContainer = styled.div`
  position: absolute;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  display: flex;
`;

export const IconItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 25px;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
  svg {
    height: 100%;
    width: 100%;
    color: white;
    transition: 0.3s;
  }

  &:hover {
    svg {
      color: ${COLORS.primary};
    }
  }
`;

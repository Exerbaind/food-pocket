import styled from "styled-components";
import {
  BORDER_RADIUS,
  BREAKPOINTS,
  COLORS,
  Z_INDEX_LIST,
} from "../../common/styles/styles";

export const Container = styled.div`
  position: fixed;
  top: 10px;
  width: 1200px;
  padding: 5px 0;
  ${COLORS.bluredBackground}
  backdrop-filter: blur(3px);
  border-radius: ${BORDER_RADIUS.standard};
  z-index: ${Z_INDEX_LIST.last};
  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: calc(100% - 32px);
  }
`;

export const Title = styled.p`
  font-size: 28px;
  color: ${COLORS.primary};
  font-family: "Rubik-Bold";
  text-align: center;
  user-select: none;
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

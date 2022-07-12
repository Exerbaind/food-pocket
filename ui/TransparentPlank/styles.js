import styled, { css } from "styled-components";
import {
  COLORS,
  BORDER_RADIUS,
  BREAKPOINTS,
  Z_INDEX_LIST,
} from "../../common/styles/styles";

export const Container = styled.div`
  position: fixed;
  padding: 0 16px;
  top: 65px;
  width: 1200px;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0 0 0 16px;
  ${COLORS.bluredBackground}
  backdrop-filter: blur(3px);
  border-radius: ${BORDER_RADIUS.standard};
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  z-index: ${Z_INDEX_LIST.hidden};
  transition: 0.3s;

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      visibility: visible;
      z-index: ${Z_INDEX_LIST.last};
    `}

  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: calc(100% - 32px);
  }
`;

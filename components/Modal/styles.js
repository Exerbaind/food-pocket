import styled, { css } from "styled-components";
import { MAIN_COLORS, Z_INDEX_LIST } from "../../common/styles/styles";

export const S = {};

S.FullscreenModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${MAIN_COLORS.white};
  display: flex;
  justify-content: center;
  overflow-y: auto;
  opacity: 0;
  visibility: hidden;
  z-index: ${Z_INDEX_LIST.hidden};
  transition: 0.3s;

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      visibility: visible;
      z-index: ${Z_INDEX_LIST.modal};
    `}
`;

S.Modal = styled.div``;

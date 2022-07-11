import styled from "styled-components";

import {
  BORDER_RADIUS,
  BREAKPOINTS,
  Z_INDEX_LIST,
} from "../../common/styles/styles";

export const Wrapper = styled.div`
  position: fixed;
  top: 10px;
  width: 1200px;
  border-radius: ${BORDER_RADIUS.standard};
  z-index: ${Z_INDEX_LIST.last};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: calc(100% - 32px);
  }
`;

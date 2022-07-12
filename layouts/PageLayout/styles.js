import styled from "styled-components";

import { BREAKPOINTS } from "../../common/styles/styles";

export const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const MainContainer = styled.div`
  width: 1200px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: 100%;
    padding: 0 16px;
  }
`;

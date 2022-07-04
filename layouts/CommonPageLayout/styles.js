import styled from "styled-components";
import { BREAKPOINTS } from "../../common/styles/styles";

export const S = {};

S.Container = styled.div`
  padding: 100px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding: 70px 16px;
  }
`;

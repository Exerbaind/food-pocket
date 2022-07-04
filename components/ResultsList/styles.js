import styled from "styled-components";
import { BREAKPOINTS } from "../../common/styles/styles";

export const S = {};

S.ResultsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 3fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: repeat(2, 6fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    grid-template-columns: repeat(1, 2fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`;

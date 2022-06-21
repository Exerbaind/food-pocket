import styled from 'styled-components';

export const S = {};

S.ResultsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 3fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
`;

import styled from "styled-components";

export const S = {};

S.Container = styled.div`
  padding: ${({ isMobile }) => (isMobile ? "70px 16px" : "100px")};
`;

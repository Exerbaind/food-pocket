import styled from "styled-components";
import { MAIN_COLORS, BREAKPOINTS } from "../../common/styles/styles";

export const S = {};

S.Container = styled.div`
  width: 700px;
  height: 100%;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding: 0 16px;
    margin-top: 20px;
  }
`;

S.FormTitle = styled.p`
  font-size: 32px;
  color: ${MAIN_COLORS.green};
  font-family: "Rubik-Medium";
  text-align: center;
  margin-top: 50px;
`;

S.Form = styled.form`
  width: 100%;
  margin-top: 30px;
  padding-bottom: 130px;
`;

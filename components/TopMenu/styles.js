import styled from "styled-components";
import { BORDER_RADIUS, BREAKPOINTS, COLORS } from "../../common/styles/styles";

export const Container = styled.div`
  width: 1200px;
  padding: 5px 0;
  ${COLORS.bluredBackground}
  backdrop-filter: blur(3px);
  border-radius: ${BORDER_RADIUS.standard};
  position: fixed;
  top: 10px;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: calc(100% - 32px);
  }
`;

export const Title = styled.p`
  font-size: 28px;
  color: ${COLORS.primary};
  /* color: white; */
  font-family: "Rubik-Bold";
  text-align: center;
  user-select: none;
`;

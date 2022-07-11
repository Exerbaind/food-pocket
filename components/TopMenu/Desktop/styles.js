import styled from "styled-components";
import { BORDER_RADIUS, COLORS } from "../../../common/styles/styles";

export const Container = styled.div`
  width: 100%;
  ${COLORS.bluredBackground}
  backdrop-filter: blur(3px);
  border-radius: ${BORDER_RADIUS.standard};
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 28px;
  color: ${COLORS.primary};
  font-family: "Rubik-Bold";
  text-align: center;
  user-select: none;
`;

export const IconsContainer = styled.div`
  position: absolute;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  display: flex;
`;

export const IconItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 25px;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
  svg {
    height: 100%;
    width: 100%;
    color: white;
    transition: 0.3s;
  }

  &:hover {
    svg {
      color: ${COLORS.primary};
    }
  }
`;

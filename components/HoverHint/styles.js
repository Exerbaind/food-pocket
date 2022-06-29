import styled from "styled-components";
import { MAIN_COLORS } from "../../common/styles/styles";

const positionTypes = {
  top: `left: 50%; top: 0; transform: translate(-50%, -120%);`,
  bottom: `left: 50%; bottom: 0; transform: translate(-50%, 120%);`,
};

export const S = {};

S.Container = styled.div`
  position: absolute;
  ${({ position }) => positionTypes[position]}
  max-width: 200px;
  padding: 5px;
  border-radius: 5px;
  background-color: ${MAIN_COLORS.grey};
  opacity: 0;
  visibility: hidden;
  z-index: -1;
  transition: 0.3s;
`;

S.Text = styled.p`
  font-size: 10px;
`;

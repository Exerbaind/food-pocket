import styled from 'styled-components';
import { MAIN_COLORS } from '../../common/styles/styles';

export const S = {};

S.Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  box-shadow: 0px 2px 5px -5px rgba(34, 60, 80, 0.6);
  padding: 0 20px;
  z-index: 10;
`;

S.Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

S.Title = styled.p`
  font-size: 36px;
  color: ${MAIN_COLORS.green};
  font-weight: bold;
  flex: 1;
  text-align: center;
  font-family: "Rubik-Bold";
  user-select: none;
`;

import styled from "styled-components";
import { TEXT_COLORS, MAIN_COLORS } from "../../common/styles/styles";

export const S = {};

S.Input = styled.div`
  margin-top: 15px;

  &:first-child {
    margin-top: 0;
  }
`;

S.InputLabel = styled.label`
  font-size: 18px;
  color: ${TEXT_COLORS.blackText};
`;

S.InputField = styled.input`
  padding: 10px;
  font-size: 18px;
  color: ${TEXT_COLORS.blackText};
  background-color: ${MAIN_COLORS.grey};
  width: 100%;
  border-radius: 5px;
  border: 1px solid transparent;
  margin-top: 5px;
  transition: 0.3s;
  outline: none;

  &:focus {
    background-color: rgba(242, 244, 247, 1);
  }
`;

S.InputButton = styled.input`
  width: 100%;
  margin-top: 40px;
  padding: 15px 0;
  font-size: 18px;
  color: ${MAIN_COLORS.white};
  background-color: ${MAIN_COLORS.green};
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: rgba(38, 135, 92, 0.7);
  }

  &:active {
    background-color: rgba(38, 135, 92, 1);
  }
`;

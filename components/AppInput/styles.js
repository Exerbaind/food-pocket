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

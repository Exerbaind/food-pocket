import styled, { css } from "styled-components";
import { TEXT_COLORS, MAIN_COLORS } from "../../common/styles/styles";

export const S = {};

S.Input = styled.div`
  margin-top: 25px;

  &:first-child {
    margin-top: 0;
  }
`;

S.InputLabel = styled.label`
  font-size: 18px;
  color: ${TEXT_COLORS.blackText};
`;

S.InputBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: nowrap;
  height: 40px;
`;

S.InputField = styled.input`
  height: 100%;
  font-size: 18px;
  padding-left: 10px;
  color: ${TEXT_COLORS.blackText};
  background-color: ${MAIN_COLORS.grey};
  flex: 1;
  border-radius: 5px;
  border: 1px solid transparent;
  margin-top: 5px;
  transition: 0.3s;
  outline: none;

  ${({ error }) =>
    !!error &&
    css`
      border: 1px solid ${MAIN_COLORS.red};
    `};

  ${({ success }) =>
    success &&
    css`
      border: 1px solid ${MAIN_COLORS.green};
    `};

  &:focus {
    background-color: rgba(242, 244, 247, 1);
  }
`;

S.InputIcon = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  cursor: pointer;

  svg {
    height: 100%;
    width: 60%;
  }
`;

S.InputError = styled.span`
  position: absolute;
  display: block;
  font-size: 14px;
  color: ${MAIN_COLORS.red};
  margin-top: 7px;
`;

S.InputButton = styled.input`
  margin-top: 25px;
  height: 50px;
  width: 100%;
  background-color: ${MAIN_COLORS.green};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  color: ${TEXT_COLORS.whiteText};
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: rgba(38, 135, 92, 0.7);
  }

  &:active {
    background-color: rgba(38, 135, 92, 1);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: rgba(242, 244, 247, 1);
      cursor: default;

      &:hover {
        background-color: rgba(242, 244, 247, 1);
      }

      &:active {
        background-color: rgba(242, 244, 247, 1);
      }
    `};
`;

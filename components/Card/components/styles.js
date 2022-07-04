import styled, { css } from "styled-components";
import {
  MAIN_COLORS,
  TEXT_COLORS,
  Z_INDEX_LIST,
} from "../../../common/styles/styles";

export const S = {};

S.Card = styled.div`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  transition: 0.3s;
`;

S.Image = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

S.CardContainer = styled.div`
  padding: 0 16px;
`;

S.Name = styled.p`
  text-align: center;
  font-size: 20px;
  font-family: "Rubik-Medium";
  margin-top: 10px;
`;

S.CardNutritions = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

S.Nutrition = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${MAIN_COLORS.grey};
  border-radius: 5px;
  width: 100%;
  margin: 0 5px;
  padding: 5px;
  user-select: none;

  &:last-child {
    margin-right: 0;
  }

  &:first-child {
    margin-left: 0;
  }

  svg {
    height: 20px;
    width: 20px;
  }

  &:hover {
    .hover-hint {
      opacity: 1;
      visibility: visible;
      z-index: ${Z_INDEX_LIST.visible};
    }
  }
`;

S.Value = styled.p`
  font-size: 12px;
  font-family: "Rubik-Medium";
  margin-top: 5px;
`;

S.Place = styled.p`
  color: ${MAIN_COLORS.green};
  font-size: 16px;
  margin-top: 16px;

  span {
    color: ${TEXT_COLORS.blackText};
  }
`;

S.CardHandler = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 10px 16px;
`;

S.HandlerItem = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${MAIN_COLORS.grey};
  }
  svg {
    height: 60%;
    width: 60%;
  }
`;

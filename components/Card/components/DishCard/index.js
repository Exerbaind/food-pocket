import React, { useState } from "react";
import { PropTypes } from "prop-types";
import {
  FaPagelines,
  FaHotjar,
  FaDrumstickBite,
  FaHamburger,
  FaRegHeart,
  FaRegEdit,
  FaRegTrashAlt,
  FaHeart, // активное сердце
} from "react-icons/fa";
import { S } from "../styles";
import fetchRequest from "../../../../common/utils/fetchRequest";
import HoverHint from "../../../HoverHint";

const handleDelete = async (id) => {
  try {
    const response = await fetchRequest("/api/dish", "DELETE", id);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const renderImage = (image) => {
  if (image) {
    return <S.Image image={image} />;
  }

  return null;
};

const renderNutritions = (nutritions) => {
  const { calories, carbohydrates, fats, proteins } = nutritions;

  return (
    <S.CardNutritions>
      <S.Nutrition>
        <HoverHint type="calories" position="top" />
        <FaHotjar />
        <S.Value>{calories}</S.Value>
      </S.Nutrition>
      <S.Nutrition>
        <HoverHint type="proteins" position="top" />
        <FaDrumstickBite />
        <S.Value>{proteins}</S.Value>
      </S.Nutrition>
      <S.Nutrition>
        <HoverHint type="fats" position="top" />
        <FaHamburger />
        <S.Value>{fats}</S.Value>
      </S.Nutrition>
      <S.Nutrition>
        <HoverHint type="carbohydrates" position="top" />
        <FaPagelines />
        <S.Value>{carbohydrates}</S.Value>
      </S.Nutrition>
    </S.CardNutritions>
  );
};

function DishCard({ item }) {
  const { dishName, image, nutritions, place, _id: mongoId } = item;

  return (
    <S.Card key={mongoId}>
      {renderImage(image)}
      <S.CardContainer>
        <S.Name>{dishName}</S.Name>
        {renderNutritions(nutritions)}
        <S.Place>
          Заведение: <span>{place}</span>
        </S.Place>
      </S.CardContainer>
      <S.CardHandler>
        <S.HandlerItem>
          <FaRegHeart color="rgba(144, 0, 32, 1)" />
        </S.HandlerItem>
        <S.HandlerItem>
          <FaRegEdit color="rgb(38, 135, 92)" />
        </S.HandlerItem>
        <S.HandlerItem onClick={() => handleDelete(mongoId)}>
          <FaRegTrashAlt color="#808080" />
        </S.HandlerItem>
      </S.CardHandler>
    </S.Card>
  );
}

DishCard.propTypes = {
  item: PropTypes.shape({
    dishName: PropTypes.string,
    image: PropTypes.string,
    nutritions: PropTypes.shape({
      calories: PropTypes.string,
      carbohydrates: PropTypes.string,
      fats: PropTypes.string,
      proteins: PropTypes.string,
    }),
    _id: PropTypes.string,
    place: PropTypes.string,
  }).isRequired,
};

export default DishCard;

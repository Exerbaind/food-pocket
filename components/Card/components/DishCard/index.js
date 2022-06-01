import React from "react";
import { PropTypes } from "prop-types";
import { S } from "../styles";
import fetchRequest from "../../../../common/utils/fetchRequest";

const handleDelete = async (id) => {
  try {
    const response = await fetchRequest("/api/dish", "DELETE", id);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

function DishCard({ item }) {
  const {
    dishName,
    nutritions: { calories, carbohydrates, fats, proteins },
    place,
    _id,
  } = item;
  return (
    <S.Card key={_id}>
      <S.Name>{dishName}</S.Name>
      <S.Button onClick={() => handleDelete(_id)}>Удалить</S.Button>
    </S.Card>
  );
}

DishCard.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default DishCard;

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
    _id: mongoId,
  } = item;

  return (
    <S.Card key={mongoId}>
      <S.Name>{dishName}</S.Name>
      <p>{place}</p>
      <p>Калории: {calories}</p>
      <p>Белки: {proteins}</p>
      <p>Жиры: {fats}</p>
      <p>Углеводы: {carbohydrates}</p>
      <S.Button onClick={() => handleDelete(mongoId)}>Удалить</S.Button>
    </S.Card>
  );
}

DishCard.propTypes = {
  item: PropTypes.shape({
    dishName: PropTypes.string,
    nutritions: PropTypes.shape({
      calories: PropTypes.number,
      carbohydrates: PropTypes.number,
      fats: PropTypes.number,
      proteins: PropTypes.number,
    }),
    _id: PropTypes.string,
    place: PropTypes.string,
  }).isRequired,
};

export default DishCard;

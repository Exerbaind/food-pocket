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
    image,
    nutritions: { calories, carbohydrates, fats, proteins },
    place,
    _id: mongoId,
  } = item;

  return (
    <S.Card key={mongoId}>
      <S.Name>{dishName}</S.Name>
      {image && <img src={image} alt={`${dishName} на FoodPocket `} />}
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

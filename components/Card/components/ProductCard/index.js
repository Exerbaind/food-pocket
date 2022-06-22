import React from "react";
import { PropTypes } from "prop-types";
import { S } from "../styles";
import fetchRequest from "../../../../common/utils/fetchRequest";

const handleDelete = async (id) => {
  try {
    const response = await fetchRequest("/api/product", "DELETE", id);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

function ProductCard({ item }) {
  const {
    productName,
    nutritions: { calories, proteins, fats, carbohydrates },
    barcode,
    _id,
  } = item;
  return (
    <S.Card key={_id}>
      <S.Name>{productName}</S.Name>
      <p>Калории: {calories}</p>
      <p>Белки: {proteins}</p>
      <p>Жиры: {fats}</p>
      <p>Углеводы: {carbohydrates}</p>
      {barcode && <p>{barcode}</p>}
      <S.Button onClick={() => handleDelete(_id)}>Удалить</S.Button>
    </S.Card>
  );
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    productName: PropTypes.string,
    nutritions: PropTypes.shape({
      calories: PropTypes.number,
      carbohydrates: PropTypes.number,
      fats: PropTypes.number,
      proteins: PropTypes.number,
    }),
    _id: PropTypes.string,
    barcode: PropTypes.string,
  }).isRequired,
};
export default ProductCard;

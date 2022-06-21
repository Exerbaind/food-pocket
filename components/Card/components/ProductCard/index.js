import React from 'react';
import { PropTypes } from 'prop-types';
import { S } from '../styles';
import fetchRequest from '../../../../common/utils/fetchRequest';

const handleDelete = async (id) => {
  try {
    const response = await fetchRequest('/api/product', 'DELETE', id);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

function ProductCard({ item }) {
  const {
    productName,
    nutritions: {
      calories, proteins, fats, carbohydrates,
    },
    barcode,
    _id,
  } = item;
  return (
    <S.Card key={_id}>
      <S.Name>{productName}</S.Name>
      {barcode && <p>{barcode}</p>}
      <S.Button onClick={() => handleDelete(_id)}>Удалить</S.Button>
    </S.Card>
  );
}

ProductCard.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default ProductCard;

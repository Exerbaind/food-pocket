import React from 'react';
import { PropTypes } from 'prop-types';
import DishCard from './components/DishCard';
import Productcard from './components/ProductCard';

function Card({ item, type }) {
  if (type === 'dish') return <DishCard item={item} />;
  if (type === 'product') return <Productcard item={item} />;
}

Card.propTypes = {
  item: PropTypes.shape({}).isRequired,
  type: PropTypes.string.isRequired,
};

export default Card;

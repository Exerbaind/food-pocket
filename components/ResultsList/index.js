import React from 'react';
import { PropTypes } from 'prop-types';
import Card from '../Card';
import { S } from './styles';

function ResultsList({ results, type }) {
  if (results && results.length) {
    return (
      <S.ResultsList>
        {results.map((item) => (
          <Card item={item} type={type} key={item._id} />
        ))}
      </S.ResultsList>
    );
  }

  return <p>Простите, ничего не найдено</p>;
}

ResultsList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})),
  type: PropTypes.string.isRequired,
};

ResultsList.defaultProps = {
  results: null,
};

export default ResultsList;

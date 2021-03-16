// @flow
import React from 'react';
import { formatNumber } from 'helpers';

type Props = {
  name?: string,
  specifications?: string,
  unit?: string,
};

const CardItem = ({ name = '', specifications = '', unit = '' }: Props) => {
  return (
    <div className="card__item">
      <p className="card__item__name">{name}</p>
      <div className="card__item__group-specifications">
        <span className="card__item__number">
          {formatNumber(specifications)}
        </span>
        <span className="card__item__unit">{unit}</span>
      </div>
    </div>
  );
};

CardItem.defaultProps = {
  name: '',
  specifications: '',
  unit: '',
};

export default CardItem;

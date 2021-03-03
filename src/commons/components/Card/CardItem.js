// @flow
import React from 'react';

type Props = {
  name?: string,
  customClass?: string,
  specifications?: number,
  progress?: number,
};

const CardItem = ({
  name = '',
  customClass = '',
  specifications = null,
  progress = null,
}: Props) => {
  return (
    <div className="card__item">
      <p className="card__item__name">{name}</p>
      <div className="card__progress">
        <div
          className={`card__progress-bar ${customClass}`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="card__item__number">{specifications}</span>
    </div>
  );
};

CardItem.defaultProps = {
  name: '',
  customClass: '',
  specifications: null,
  progress: null,
};

export default CardItem;

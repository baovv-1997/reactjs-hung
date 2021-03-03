// @flow
import CARD from 'constants/card';
import React, { memo } from 'react';

import CardItem from './CardItem';

type Props = {
  title?: string,
  listItem?: Array,
  listCompany?: Array,
  logoClick: Function,
  titleClick: Function,
};

export const Card = ({
  title = '',
  listItem = [],
  listCompany = [],
  logoClick,
  titleClick,
}: Props) => {
  // loop listItem and return to card
  const cardItem = listItem.map((item) => {
    switch (item.title) {
      case 'date':
        return (
          <CardItem
            key={item.title}
            name={CARD.date}
            customClass="progress-date"
            specifications={item.specifications}
            progress={item.progress}
          />
        );

      case 'month':
        return (
          <CardItem
            key={item.title}
            name={CARD.month}
            customClass="progress-month"
            specifications={item.specifications}
            progress={item.progress}
          />
        );

      case 'year':
        return (
          <CardItem
            key={item.title}
            name={CARD.year}
            customClass="progress-year"
            specifications={item.specifications}
            progress={item.progress}
          />
        );

      default:
        return (
          <CardItem
            key={item.title}
            name={CARD.power}
            customClass="progress-power"
            specifications={item.specifications}
            progress={item.progress}
          />
        );
    }
  });

  return (
    <div className="card">
      <div className="card__header">
        <p className="card__title" onClick={titleClick} role="presentation">
          {title}
        </p>
        <p className="card__unit">kWh</p>
      </div>
      <div className="card__body">
        {/* list item in card */}
        <div className="card__list">{cardItem}</div>

        <div className="card__company">
          {/* list company in card */}
          {listCompany.map((item) => (
            <img
              key={item.id}
              src={item.logo}
              alt="logocompany"
              className="card__company__item"
              onClick={logoClick}
              role="presentation"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: '',
  listItem: [],
  listCompany: [],
};

export default memo<Props>(Card);

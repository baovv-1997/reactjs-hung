// @flow
import CARD from 'constants/card';
import React, { memo } from 'react';

import CardItem from './CardItem';

type Props = {
  isLogoTop?: boolean,
  title?: string,
  listItem?: Array,
  listCompany?: Array,
  logoClick: Function,
  titleClick: Function,
  customClass?: string,
  isCardCompany?: boolean,
};

export const Card = ({
  isLogoTop = false,
  title = '',
  listItem = [],
  listCompany = [],
  logoClick,
  titleClick,
  customClass = '',
  isCardCompany = false,
}: Props) => {
  // loop listItem and return to card
  const cardItem = listItem.map((item) => {
    switch (item.title) {
      case 'date':
        return (
          <CardItem
            key={item.title}
            name={CARD.date}
            customClass="progress-color1"
            specifications={item.specifications}
            progress={item.progress}
          />
        );

      case 'month':
        return (
          <CardItem
            key={item.title}
            name={CARD.month}
            customClass="progress-color2"
            specifications={item.specifications}
            progress={item.progress}
          />
        );

      case 'year':
        return (
          <CardItem
            key={item.title}
            name={CARD.year}
            customClass="progress-color3"
            specifications={item.specifications}
            progress={item.progress}
          />
        );

      case 'power':
        return (
          <CardItem
            key={item.title}
            name={CARD.power}
            customClass="progress-color4"
            specifications={item.specifications}
            progress={item.progress}
          />
        );

      case 'power-day':
        return (
          <CardItem
            key={item.title}
            name={CARD.powerDay}
            customClass="progress-color1"
            specifications={`${item.specifications}kHw`}
            progress={item.progress}
          />
        );

      case 'max-power-day':
        return (
          <CardItem
            key={item.title}
            name={CARD.maxPowerDay}
            customClass="progress-color2"
            specifications={`${item.specifications}kHw`}
            progress={item.progress}
          />
        );

      case 'rate-power-day':
        return (
          <CardItem
            key={item.title}
            name={CARD.ratePowerDay}
            customClass="progress-color3"
            specifications={`${item.specifications}%`}
            progress={item.progress}
          />
        );

      case 'current-month':
        return (
          <CardItem
            key={item.title}
            name={CARD.currentMonth}
            customClass="progress-color4"
            specifications={`${item.specifications}kHw`}
            progress={item.progress}
          />
        );

      case 'current-year':
        return (
          <CardItem
            key={item.title}
            name={CARD.currentYear}
            customClass="progress-color5"
            specifications={`${item.specifications}MWh`}
            progress={item.progress}
          />
        );

      case 'amount-power':
        return (
          <CardItem
            key={item.title}
            name={CARD.amountPower}
            customClass="progress-color6"
            specifications={`${item.specifications}MW`}
            progress={item.progress}
          />
        );

      default:
        return (
          <CardItem
            key={item.title}
            customClass=""
            specifications={item.specifications}
            progress={item.progress}
          />
        );
    }
  });

  return (
    <div className="card">
      {isLogoTop && (
        <div className="card__company card__company--top">
          <img
            src={listCompany.logo}
            alt="logocompany"
            className="card__company__item"
          />
        </div>
      )}
      <div className={`card__header ${customClass}`}>
        <p className="card__title" onClick={titleClick} role="presentation">
          {title}
        </p>
        <p className="card__unit">kWh</p>
      </div>
      <div
        className={
          isCardCompany ? 'card__body card__body--company' : 'card__body'
        }
      >
        {/* list item in card */}
        <div className="card__list">{cardItem}</div>

        {!isLogoTop && (
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
        )}
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: '',
  listItem: [],
  listCompany: [],
  isLogoTop: false,
  customClass: '',
  isCardCompany: false,
};

export default memo<Props>(Card);

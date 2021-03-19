// @flow
import React, { memo } from 'react';
import IMAGES from 'themes/images';

import CardItem from './CardItem';

type Props = {
  isLogoTop?: boolean,
  title?: string,
  listCompany?: any,
  logoClick: Function,
  titleClick: Function,
  onClick: Function,
  customClass?: string,
  isCardCompany?: boolean,
  isEvent?: boolean,
  amountElectricDay?: number,
  amountElectricMonth?: number,
  electricRealtime?: number,
  ratePower?: number,
  cumulativeElectric?: number,

};

export const Card = ({
  isLogoTop = false,
  title = '',
  listCompany = [],
  logoClick,
  titleClick,
  onClick,
  customClass = '',
  isCardCompany = false,
  isEvent = false,
  amountElectricDay = 0,
  amountElectricMonth = 0,
  electricRealtime = 0,
  ratePower = 0,
  cumulativeElectric = 0,
}: Props) => {
  return (
    <div className={`card ${customClass}`} onClick={onClick} role="presentation">
      {isLogoTop && (
        <div className="card__company card__company--top">
          <img
            src={listCompany.logo}
            alt="logocompany"
            className="card__company__item"
          />
        </div>
      )}
      <div className={`card__header ${isEvent ? 'header-event' : ''}`}>
        <p
          className={`card__title ${isEvent ? 'card__event' : ''}`}
          onClick={titleClick}
          role="presentation"
        >
          {title}
        </p>
        {isEvent && (
          <img
            src={IMAGES.icon_event_card}
            alt=""
            className="card__logo-event"
          />
        )}
      </div>
      <div
        className={
          isCardCompany ? 'card__body card__body--company' : 'card__body'
        }
      >
        {/* list item in card */}
        <div className="card__list">
          <CardItem
            name="실시간 발전량"
            specifications={electricRealtime}
            unit="kWh"
          />
          <CardItem name="성능비" specifications={ratePower} unit="%" />
          <CardItem name="금일" specifications={amountElectricDay} unit="kWh" />
          <CardItem
            name="금월"
            specifications={amountElectricMonth}
            unit="mWh"
          />
          <CardItem
            name="누적발전량"
            specifications={cumulativeElectric}
            unit="MW"
          />
        </div>

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
  listCompany: [],
  isLogoTop: false,
  customClass: '',
  isCardCompany: false,
  isEvent: false,
  amountElectricDay: 0,
  amountElectricMonth: 0,
  electricRealtime: 0,
  ratePower: 0,
  cumulativeElectric: 0,
};

export default memo<Props>(Card);

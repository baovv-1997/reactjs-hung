import React from 'react';

export const TotalPower = () => {
  return (
    <div className="total-power">
      <div className="total-power__header">
        <div className="total-power__title">총 발전 현황</div>
        <div className="total-power__unit">kWh</div>
      </div>
      <div className="total-power__body">
        <div className="total-power__item">
          <div className="total-power__content">
            <div className="total-power__content-header">
              <img src="" alt="" />
              <p className="total-power__item-name">금일 발전량</p>
            </div>
            <p className="total-power__item-value">1,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPower;

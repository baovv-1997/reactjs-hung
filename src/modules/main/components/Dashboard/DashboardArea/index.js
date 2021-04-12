/* eslint-disable react-hooks/exhaustive-deps */
import { Card } from 'commons/components/Card';
import Loading from 'commons/components/Loading';
import SelectDropdown from 'commons/components/Select';
import ROUTERS from 'constants/routers';
import {
  getListPosition,
  getCardMeasureArea,
  setPositionId,
  setCompanyId,
  getTotalMetric,
} from 'modules/main/redux';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import IMAGES from 'themes/images';
import InfoReality from '../../InfoReality';
import TotalPower from '../../TotalPower';
import VitualData from '../../VitualData';
import WeeklyElectric from '../../WeeklyElectric';

const DashboardArea = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    isLoading,
    cardMeasureArea,
    listPositions,
    positionId,
    totalMetric,
  } = useSelector((state) => state?.main);
  const { data: totalInfo, chart } = totalMetric;
  const [bgImage, setBgImage] = useState(null);
  const [positionName, setPositionName] = useState(null);
  const [optionDropdown, setOptionDropdown] = useState(null);

  const posId = useRef(positionId);

  useEffect(() => {
    dispatch(getListPosition());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (posId.current) {
      const positionSelected = listPositions.filter(
        (item) => item.id === posId.current
      );
      setOptionDropdown(positionSelected[0]);
      // set positionId = 0 to set default dropdown
      dispatch(setPositionId({ id: 0 }));
    } else {
      const indexDefault = listPositions.findIndex((item) =>
        item?.label.includes('본관 남측')
      );
      setOptionDropdown(listPositions[indexDefault]);
    }
  }, [listPositions, positionId]);

  // set option dropdown value when listposition != [];
  useEffect(() => {
    if (optionDropdown) {
      dispatch(
        getCardMeasureArea({ type: 'inverter', pos_id: optionDropdown?.id })
      );
      dispatch(getTotalMetric({ pos_id: optionDropdown?.id }));
      const positionSelected = listPositions.filter(
        (item) => item?.id === optionDropdown?.id
      );
      setBgImage(positionSelected[0]?.pos_map_path?.thumbnail);
      setPositionName(positionSelected[0]?.label);
    }
  }, [optionDropdown]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (optionDropdown) {
        dispatch(getTotalMetric({ pos_id: optionDropdown?.id }));
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [optionDropdown]);

  // event logo click
  const handleLogoClick = (id) => {
    history.push(ROUTERS.STATUS_COMPANY);
    dispatch(setCompanyId({ id }));
  };

  // event title click
  const handleTitleClick = (id) => {
    history.push(ROUTERS.STATUS_COMPANY);
    dispatch(setCompanyId({ id }));
  };

  console.log(cardMeasureArea, 'cardMeasureArea');

  return (
    <>
      {isLoading && <Loading />}
      <div
        className="dashboard-area"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <SelectDropdown
          placeholder="List Selects"
          listItem={listPositions}
          onChange={(ops) => {
            setOptionDropdown(ops);
          }}
          option={optionDropdown}
          disabled={false}
          isSearchable={false}
          blurInputOnSelect={false}
          customClass="header__select"
        />

        <div className="current-electric">
          <div className="current-electric__title">
            <img src={IMAGES.icon_title} alt="Title" className="icon-title" />
            <p className="title">{positionName}</p>
            <div className="line" />
          </div>
          <TotalPower
            amountElectricDay={totalInfo?.prod_today}
            amountElectricMonth={totalInfo?.prod_inmonth}
            cumulativeElectric={totalInfo?.prod_sum}
          />
          <WeeklyElectric measure={chart} />
          <InfoReality
            outputVoltage={totalInfo?.output_voltage}
            outputCurrent={totalInfo?.output_current}
            electricRealtime={totalInfo?.prod_realtime}
            ratePower={totalInfo?.performance_ratio}
          />
          <VitualData
            radiance={totalInfo?.radiance}
            temperature={totalInfo?.temperature}
          />
        </div>
        <div className="dashboard-area__card">
          {cardMeasureArea &&
            cardMeasureArea?.map((posItem, index) => (
              <Card
                key={index}
                title={posItem?.company?.com_name}
                listCompany={[posItem?.company]}
                amountElectricDay={posItem?.card?.prod_today}
                amountElectricMonth={posItem?.card?.prod_inmonth}
                electricRealtime={posItem?.card?.prod_realtime}
                cumulativeElectric={posItem?.card?.prod_sum}
                ratePower={posItem?.card?.performance_ratio}
                isEvent={!!posItem?.card?.event}
                logoClick={handleLogoClick}
                titleClick={() => handleTitleClick(posItem?.company?.id)}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default DashboardArea;

// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';
import { LabelStatus } from 'commons/components/Label/LabelStatus';
import CheckBox from 'commons/components/CheckBox';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import SelectDropdown from 'commons/components/Select';
import Button from 'commons/components/Button';
import { listPaginationType } from 'constants/listKey';
import { headStatusCompany } from 'constants/headerTable';
import LineSeriesChart from './chart';

type Props = {
  listMockupDataCompany: any,
  dataContent: Object,
  powerData: Object,
  handleDownloadTrend: Function,
  handleChangeSearch: Function,
  paramsSearch: Object,
  temperatureData: Object,
  insolationData: Object,
};

const ItemContentTab = ({
  listMockupDataCompany,
  powerData,
  dataContent,
  handleDownloadTrend,
  handleChangeSearch,
  temperatureData,
  insolationData,
  paramsSearch,
}: Props) => {
  console.log(dataContent, 'dataContent');
  const dataLengthChart = [
    {
      id: 1,
      name: '발전량 kWh',
      color: '#8567b4',
    },
    {
      id: 2,
      name: '모듈온도 ℃',
      color: '#c05e13',
    },
    {
      id: 3,
      name: '수평 일사량 kWh/㎡·10초',
      color: '#fe8224',
    },
  ];

  return (
    <div className="content-wrap-tab">
      <div className="box-group">
        <LabelStatus type={powerData?.type} data={powerData?.data} isPower />
        <LabelStatus
          type={temperatureData?.type}
          data={temperatureData?.data}
          isTemperature
        />
        <LabelStatus
          type={insolationData?.type}
          data={insolationData?.data}
          isInsolation
        />
      </div>

      <div className="group-char">
        <div className="group-char-left">
          <div className="group-char-checkbox">
            <div className="checkbox-header">차트 비교</div>
            <div className="list-checkbox">
              <CheckBox
                name="power"
                isChecked={paramsSearch?.power}
                label="발전량"
                id="power"
                handleToggleCheckbox={() =>
                  handleChangeSearch(paramsSearch?.power, 'power')
                }
              />
              <CheckBox
                name="temperature"
                id="temperature"
                isChecked={paramsSearch?.temperature}
                label="모듈온도"
                handleToggleCheckbox={() =>
                  handleChangeSearch(paramsSearch?.temperature, 'temperature')
                }
              />
              <CheckBox
                name="insolation"
                id="insolation"
                isChecked={paramsSearch?.insolation}
                label="수평 일사량"
                handleToggleCheckbox={() =>
                  handleChangeSearch(paramsSearch?.insolation, 'insolation')
                }
              />
            </div>
          </div>
          <div className="group-length-chart">
            <LengthChart dataLengthChart={dataLengthChart} />
          </div>
        </div>
        <div className="group-char-right">
          <LineSeriesChart />
        </div>
      </div>

      <TitleSubHeader title="발전 현황" />
      <div className="group-option-table d-flex  justify-content-between mb-3">
        <SelectDropdown
          placeholder="구분"
          listItem={listPaginationType}
          onChange={(option) => handleChangeSearch(option, 'pagination')}
          option={paramsSearch?.pagination || null}
          noOptionsMessage={() => '옵션 없음'}
        />
        <div className="group-btn-download">
          <Button
            onClick={() => handleDownloadTrend('trend')}
            customClass="mr-2"
          >
            Trend 이미지 다운
          </Button>
          <Button onClick={() => handleDownloadTrend('raw')}>
            Raw Date 다운
          </Button>
        </div>
      </div>
      <div>
        <Table
          tableHeads={headStatusCompany}
          tableBody={listMockupDataCompany}
          // isShowId
        />
      </div>
    </div>
  );
};

export default memo<Props>(ItemContentTab);

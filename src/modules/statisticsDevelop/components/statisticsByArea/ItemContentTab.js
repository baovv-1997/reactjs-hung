// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';

import LabelStatusV3 from 'commons/components/Label/LabelStatus/LabelStatusV3';
import CheckBox from 'commons/components/CheckBox';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import SelectDropdown from 'commons/components/Select';
import Button from 'commons/components/Button';
import FilterSearch from '../FilterSearch';
import { listPaginationType } from 'constants/listKey';
import { headStatisticsCompany } from 'constants/headerTable';

type Props = {
  dataTableStatisticsCompany: any,
  dataContent: Object,
  dataBoxContent: Object,
  handleDownloadTrend: Function,
  handleChangeSearch: Function,
  paramsSearch: Object,
  listStatusCompanySelect: Array<{
    id: number,
    value: any,
    label: string,
  }>,
  listInverter: Array<{
    id: number,
    value: any,
    label: string,
  }>,
};

const ItemContentTab = ({
  dataTableStatisticsCompany,
  dataContent,
  dataBoxContent,
  handleDownloadTrend,
  handleChangeSearch,
  paramsSearch,
  listStatusCompanySelect,
  listInverter,
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
      name: '일사량 ℃',
      color: '#c05e13',
    },
    {
      id: 3,
      name: '성능비 kWh/㎡·10초',
      color: '#fe8224',
    },
  ];
  return (
    <div className="content-wrap-tab">
      <div className="box-group">
        <LabelStatusV3
          nameStatus={dataBoxContent?.day}
          unit="kWh"
          title="금일 발전량"
          keyStatus={1}
          color="#3b74e7"
        />
        <LabelStatusV3
          nameStatus={dataBoxContent?.month}
          unit="kWh"
          title="금월 발전량"
          keyStatus={2}
          color="#fe5e6a"
        />
        <LabelStatusV3
          nameStatus={dataBoxContent?.year}
          unit="MWh"
          title="금년 발전량"
          keyStatus={3}
          color="#ffb00d"
        />
      </div>
      <FilterSearch
        listStatusCompanySelect={listStatusCompanySelect}
        listInverter={listInverter}
        handleChangeSearch={handleChangeSearch}
        paramsSearch={paramsSearch}
      />

      <div className="group-char">
        <div className="group-char-left">
          <div className="group-char-checkbox">
            <div className="checkbox-header">차트 비교</div>
            <div className="list-checkbox">
              <CheckBox
                name="generation"
                isChecked={paramsSearch?.generation}
                label="발전량"
                id="generation"
                handleToggleCheckbox={() =>
                  handleChangeSearch(paramsSearch?.generation, 'generation')
                }
              />
              <CheckBox
                name="insolation"
                id="insolation"
                isChecked={paramsSearch?.insolation}
                label="일사량"
                handleToggleCheckbox={() =>
                  handleChangeSearch(paramsSearch?.insolation, 'insolation')
                }
              />
              <CheckBox
                name="performance"
                id="performance"
                isChecked={paramsSearch?.performance}
                label="성능비"
                handleToggleCheckbox={() =>
                  handleChangeSearch(paramsSearch?.performance, 'performance')
                }
              />
            </div>
          </div>
          <div className="group-length-chart">
            <LengthChart dataLengthChart={dataLengthChart} />
          </div>
        </div>
        <div className="group-char-right">{/* Add  Chart */}</div>
      </div>
      <TitleSubHeader title="발전 통계" />
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
          tableHeads={headStatisticsCompany}
          tableBody={dataTableStatisticsCompany}
          // isShowId
        />
      </div>
    </div>
  );
};

export default memo<Props>(ItemContentTab);

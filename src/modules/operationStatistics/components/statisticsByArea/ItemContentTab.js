// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';

import DatePicker from 'react-datepicker';
import IMAGES from 'themes/images';
import LabelStatusV3 from 'commons/components/Label/LabelStatus/LabelStatusV3';
import CheckBox from 'commons/components/CheckBox';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import SelectDropdown from 'commons/components/Select';
import Button from 'commons/components/Button';
import { listPaginationType } from 'constants/listKey';
import { headStatusCompany } from 'constants/headerTable';

type Props = {
  listMockupDataCompany: any,
  dataContent: Object,
  dataBoxContent: Object,
  handleDownloadTrend: Function,
  handleChangeSearch: Function,
  paramsSearch: Object,
};

const ItemContentTab = ({
  listMockupDataCompany,
  dataContent,
  dataBoxContent,
  handleDownloadTrend,
  handleChangeSearch,
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
        <LabelStatusV3
          nameStatus={dataBoxContent?.plus}
          title="누적 발전량"
          keyStatus={4}
          color="#6d5ebd"
          unit="MV"
        />
      </div>

      <div className="group-search">
        <div className="table-form">
          <div className="item-row d-flex">
            <div className="colum-left">단위 선택</div>
            <div className="colum-right">
              <div className="group-button-unit-selection">
                <Button
                  onClick={() => handleChangeSearch('all', 'classification')}
                  customClass={`${
                    paramsSearch?.classification === 'all' ? 'active' : ''
                  }`}
                >
                  분별
                </Button>
                <Button
                  onClick={() => handleChangeSearch('hourly', 'classification')}
                  customClass={`${
                    paramsSearch?.classification === 'hourly' ? 'active' : ''
                  }`}
                >
                  시간별
                </Button>
                <Button
                  onClick={() => handleChangeSearch('glance', 'classification')}
                  customClass={`${
                    paramsSearch?.classification === 'glance' ? 'active' : ''
                  }`}
                >
                  일별
                </Button>
                <Button
                  onClick={() => handleChangeSearch('byYear', 'classification')}
                  customClass={`${
                    paramsSearch?.classification === 'byYear' ? 'active' : ''
                  }`}
                >
                  연별
                </Button>
              </div>
            </div>
          </div>
          <div className="item-row d-flex">
            <div className="colum-left">비교 분석</div>
            <div className="colum-right">
              <div className="d-flex justify-content-start date-group align-items-center">
                <div className="group-select-search d-flex justify-content-start align-items-center">
                  <div className="title-label">업체 선택</div>
                  <SelectDropdown
                    placeholder="업체 선택"
                    listItem={listPaginationType}
                    onChange={(option) => handleChangeSearch(option, 'vendor')}
                    option={paramsSearch?.vendor || null}
                    noOptionsMessage={() => '옵션 없음'}
                  />
                </div>
                <img src={IMAGES.arrow_right} alt="" className="mx-2" />
                <div className="group-select-search d-flex justify-content-start align-items-center mr-10">
                  <div className="title-label">인버터 선택</div>
                  <SelectDropdown
                    placeholder="선택되지 않음"
                    listItem={listPaginationType}
                    onChange={(option) =>
                      handleChangeSearch(option, 'inverter')
                    }
                    option={paramsSearch?.inverter || null}
                    noOptionsMessage={() => '옵션 없음'}
                  />
                </div>
                <div className="title-label">검색기간</div>
                <div className="input-date">
                  <DatePicker
                    selected={paramsSearch?.startDate}
                    onChange={(date) => handleChangeSearch(date, 'startDate')}
                    dateFormat="yyyy-MM-dd"
                  />
                  <img src={IMAGES.iconCalendar} alt="icon-calendar" />
                </div>
                <span>~</span>
                <div className="input-date">
                  <DatePicker
                    selected={paramsSearch?.endDate}
                    onChange={(date) => handleChangeSearch(date, 'endDate')}
                    dateFormat="yyyy-MM-dd"
                  />
                  <img src={IMAGES.iconCalendar} alt="icon-calendar" />
                </div>
                <Button
                  onClick={() => handleChangeSearch('', 'submitSearch')}
                  customClass="h-32"
                >
                  검색
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
        <div className="group-char-right">{/* Add  Chart */}</div>
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

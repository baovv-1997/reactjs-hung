// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';
import Pagination from 'react-js-pagination';
import LabelStatusV3 from 'commons/components/Label/LabelStatus/LabelStatusV3';
import CheckBox from 'commons/components/CheckBox';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import SelectDropdown from 'commons/components/Select';
import Button from 'commons/components/Button';
import { listPaginationType } from 'constants/listKey';
import ROUTERS from 'constants/routers';
import {
  headStatusCompany,
  headOperationStatusByAreaCompany,
} from 'constants/headerTable';
import { useHistory } from 'react-router-dom';

type Props = {
  listMockupDataCompany: any,
  dataContent: Object,
  dataBoxContent: Object,
  handleDownloadTrend: Function,
  totalPage: number,
  perPage: number,
  tableOperationStatusByAreaCompany: Array<{
    id: number,
  }>,
  isShowModalSorting: boolean,
  handleClickDetail: Function,
  handleChangeSearch: Function,
  paramsSearch: Object,
};

const ItemContentTab = ({
  listMockupDataCompany,
  dataContent,
  dataBoxContent,
  handleDownloadTrend,
  totalPage,
  perPage,
  tableOperationStatusByAreaCompany,
  isShowModalSorting,
  handleClickDetail,
  handleChangeSearch,
  paramsSearch,
}: Props) => {
  console.log(dataContent, 'dataContent');
  const history = useHistory();
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
              <span>아반시스코리아</span>
              {/* <img
                src={images.arrow_right}
                alt=""
                className="mx-2 position-top-1"
              /> */}
              <span>본관남측</span>
              {/* <img
                src={images.arrow_right}
                alt=""
                className="mx-2 position-top-1"
              /> */}
              <span>DSP-3320K-OR</span>
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
          onChange={(option) => handleChangeSearch(option, 'pagination1')}
          option={paramsSearch?.pagination1 || null}
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
      <div className="mb-5">
        <Table
          tableHeads={headStatusCompany}
          tableBody={listMockupDataCompany}
          // isShowId
        />
        <div className="opacity d-block pagination">
          {totalPage > perPage && (
            <div className="wrapper-device__pagination">
              <Pagination
                activePage={paramsSearch?.page1}
                itemsCountPerPage={perPage}
                totalItemsCount={totalPage}
                pageRangeDisplayed={5}
                onChange={(e) => handleChangeSearch(e, 'page1')}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}
        </div>
      </div>

      {/*  Table Bottom */}
      <div className="group-option-table d-flex  justify-content-between mb-3">
        <SelectDropdown
          placeholder="구분"
          listItem={listPaginationType}
          onChange={(option) => handleChangeSearch(option, 'pagination2')}
          option={paramsSearch?.pagination2 || null}
          noOptionsMessage={() => '옵션 없음'}
        />
        <div className="group-btn-download">
          <Button onClick={() => handleDownloadTrend('raw2')}>
            Raw Date 다운
          </Button>
        </div>
      </div>
      <Table
        tableHeads={headOperationStatusByAreaCompany}
        tableBody={tableOperationStatusByAreaCompany}
        // isShowId
        handleCheckboxSort={(option) => handleChangeSearch(option, 'checkBox')}
        handleShowModalSorting={() => handleChangeSearch('', 'modal')}
        showModalSort={{
          isShow: isShowModalSorting,
          keyItem: 5,
        }}
        onClickRow={handleClickDetail}
      />
      <div className="group-btn-register text-right">
        <Button
          onClick={() =>
            history.push(ROUTERS.OPERATION_STATUS_BY_COMPANY_REGISTER)
          }
        >
          등록
        </Button>
      </div>
      <div className="opacity d-block pagination mt-4">
        {totalPage > perPage && (
          <div className="wrapper-device__pagination">
            <Pagination
              activePage={paramsSearch?.page2}
              itemsCountPerPage={perPage}
              totalItemsCount={totalPage}
              pageRangeDisplayed={5}
              onChange={(e) => handleChangeSearch(e, 'page2')}
              itemClass="page-item"
              linkClass="page-link"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default memo<Props>(ItemContentTab);

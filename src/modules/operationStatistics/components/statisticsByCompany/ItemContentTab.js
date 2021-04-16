// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';
import Pagination from 'react-js-pagination';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import SelectDropdown from 'commons/components/Select';
// import Button from 'commons/components/Button';
import { listPaginationType5PerPage } from 'constants/listKey';
import { operator_event_filter } from 'constants/optionCheckbox';
import LineChart2 from 'commons/components/LineChart/LineChart2';
// import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import ROUTERS from 'constants/routers';
import { ButtonDownExcel } from 'commons/components/ButtonDownExcel';
import IMAGES from 'themes/images';
import {
  headOperationStatusByAreaCompany,
  statisticsOperatorCompany,
} from '../constant';
import BoxGroup from '../BoxGroup';
import GroupCompareChart from '../GroupCompareChart';
import GroupActionDownload from '../GroupActionDownload';
import { FilterSearch } from '../FilterSearch';

type Props = {
  rawData: any,
  dataBoxContent: Object,
  totalPage: number,
  perPage: number,
  totalPage2: number,
  perPage2: number,
  tableOperationStatusByAreaCompany: Array<{
    id: number,
  }>,
  isShowModalSorting: boolean,
  handleClickDetail: Function,
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
  optionFilters: Array,
  handleSubmitSearch: Function,
  tabActive: any,
  dateTime: Object,
  chartData: any,
  id: string,
  isProcessingRaw: boolean,
  isProcessingRawEvent: boolean,
};

const ItemContentTab = ({
  rawData,
  dataBoxContent,
  totalPage,
  perPage,
  totalPage2,
  perPage2,
  tableOperationStatusByAreaCompany,
  isShowModalSorting,
  handleClickDetail,
  handleChangeSearch,
  paramsSearch,
  listStatusCompanySelect,
  listInverter,
  optionFilters,
  handleSubmitSearch,
  tabActive,
  dateTime,
  chartData,
  id,
  isProcessingRaw,
  isProcessingRawEvent,
}: Props) => {
  const dataLengthChart = [
    {
      id: 1,
      name: 'PV전압',
      color: '#8567b4',
    },
    {
      id: 2,
      name: 'PV전류',
      color: '#c05e13',
    },
    {
      id: 3,
      name: '출력전류',
      color: '#fe8224',
    },
    {
      id: 4,
      name: '출력',
      color: '#ffcc00',
    },
    {
      id: 5,
      name: '출력전압',
      color: '#102a82',
    },
  ];
  return (
    <div className="content-wrap-tab">
      <BoxGroup
        dataBoxContent={dataBoxContent}
        paramsSearch={paramsSearch}
        handleChangeSearch={handleChangeSearch}
      />
      <FilterSearch
        listStatusCompanySelect={listStatusCompanySelect}
        listInverter={listInverter}
        listInverter1={listInverter}
        handleChangeSearch={handleChangeSearch}
        paramsSearch={paramsSearch}
        handleSubmitSearch={handleSubmitSearch}
        activeTab={tabActive}
      />

      <div className="group-char" id="groupChart">
        <div className="group-char-left">
          <GroupCompareChart
            paramsSearch={paramsSearch}
            handleChangeSearch={handleChangeSearch}
          />
          <div className="group-length-chart">
            <LengthChart dataLengthChart={dataLengthChart} />
          </div>
        </div>
        <div className="group-char-right">
          {tabActive?.toString() === id?.toString() && chartData && (
            <LineChart2
              dataChart={chartData}
              unitLine1="V"
              unitLine2="A"
              unitLine3="A"
              unitLine4="kW"
              unitLine5="V"
              optionLine={{
                line1: paramsSearch?.PVVoltage,
                line2: paramsSearch?.PVCurrent,
                line3: paramsSearch?.outputVoltage,
                line4: paramsSearch?.outputCurrent,
                line5: paramsSearch?.print,
              }}
              typeLine="line"
              widthLine={2}
              unitLeft="V"
              unitRight="A"
              showPoint1
              showPoint2
              showPoint3
            />
          )}
        </div>
      </div>
      <TitleSubHeader title="발전 통계" />
      <GroupActionDownload
        paramsSearch={paramsSearch}
        handleChangeSearch={handleChangeSearch}
        linkDownTable={`operator/statistic/?inverter_id=${tabActive}&com_id=${paramsSearch?.company}&time_to=${dateTime?.to}&time_from=${dateTime?.from}&type=${paramsSearch?.classification}`}
        text="Sampling Data다운"
      />
      <div>
        <Table
          tableHeads={statisticsOperatorCompany}
          tableBody={rawData}
          // isShowId
          isLoading={isProcessingRaw}
        />
        <div className="opacity d-block pagination mt-0 mb-3">
          {totalPage > perPage && !isProcessingRaw && (
            <div className="wrapper-device__pagination mt-0">
              <Pagination
                activePage={paramsSearch?.page}
                itemsCountPerPage={perPage}
                totalItemsCount={totalPage}
                pageRangeDisplayed={5}
                onChange={(e) => handleChangeSearch(e, 'page')}
                itemClass="page-item"
                linkClass="page-link"
                firstPageText={
                  <img
                    src={IMAGES.double_arrow_left}
                    alt=""
                    className="double-prev"
                  />
                }
                lastPageText={
                  <img
                    src={IMAGES.double_arrow_right}
                    alt=""
                    className="double-prev"
                  />
                }
                prevPageText={
                  <img src={IMAGES.arrow_left} alt="" className="double-prev" />
                }
                nextPageText={
                  <img
                    src={IMAGES.arrow_right1}
                    alt=""
                    className="double-prev"
                  />
                }
              />
            </div>
          )}
        </div>
      </div>

      {/*  Table Bottom */}
      <TitleSubHeader title="이벤트 통계" />
      <div className="group-option-table d-flex  justify-content-between">
        <SelectDropdown
          placeholder="구분"
          listItem={listPaginationType5PerPage}
          onChange={(option) => handleChangeSearch(option, 'pagination2')}
          option={paramsSearch?.pagination2 || null}
          noOptionsMessage={() => '옵션 없음'}
        />
        <div className="group-btn-download">
          <ButtonDownExcel
            linkDownTable={`operator/event?inverter_id=${tabActive}&com_id=${paramsSearch?.company}&time_to=${dateTime?.to}&time_from=${dateTime?.from}&type=${paramsSearch?.classification}`}
            keyName="solar"
            text="Raw data 다운"
          />
        </div>
      </div>
      <Table
        tableHeads={headOperationStatusByAreaCompany}
        tableBody={tableOperationStatusByAreaCompany}
        isShowId
        handleCheckboxSort={(option) => handleChangeSearch(option, 'checkBox')}
        handleShowModalSorting={() => handleChangeSearch('', 'modal')}
        showModalSort={{
          isShow: isShowModalSorting,
          keyItem: 5,
        }}
        onClickRow={handleClickDetail}
        listOption={operator_event_filter}
        optionDefault={optionFilters}
        isLoading={isProcessingRawEvent}
      />
      <div className="opacity d-block pagination mt-0">
        {totalPage2 > perPage2 && !isProcessingRawEvent && (
          <div className="wrapper-device__pagination mt-0">
            <Pagination
              activePage={paramsSearch?.page2}
              itemsCountPerPage={perPage2}
              totalItemsCount={totalPage2}
              pageRangeDisplayed={5}
              onChange={(e) => handleChangeSearch(e, 'page2')}
              itemClass="page-item"
              linkClass="page-link"
              firstPageText={
                <img
                  src={IMAGES.double_arrow_left}
                  alt=""
                  className="double-prev"
                />
              }
              lastPageText={
                <img
                  src={IMAGES.double_arrow_right}
                  alt=""
                  className="double-prev"
                />
              }
              prevPageText={
                <img src={IMAGES.arrow_left} alt="" className="double-prev" />
              }
              nextPageText={
                <img src={IMAGES.arrow_right1} alt="" className="double-prev" />
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default memo<Props>(ItemContentTab);

// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';
import Pagination from 'react-js-pagination';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import SelectDropdown from 'commons/components/Select';
import { listPaginationType } from 'constants/listKey';
import {
  headStatisticsCompany,
  headStatisticsOfModuleCompany,
} from '../constant';
import FilterSearch from '../FilterSearch';
import BoxGroup from '../BoxGroup';
import GroupCompareChart from '../GroupCompareChart';
import GroupActionDownload from '../GroupActionDownload';
import { ButtonDownExcel } from 'commons/components/ButtonDownExcel';

type Props = {
  rawData: any,
  dataBoxContent: Object,
  totalPage: number,
  perPage: number,
  totalPage2: number,
  perPage2: number,
  dataTableStatisticsOfModuleCompany: Array<{
    id: number,
  }>,
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
  activeTab: string,
  handleSubmitSearch: Function,
  dateTime: Object,
};

const ItemContentTab = ({
  rawData,
  dataBoxContent,
  totalPage,
  perPage,
  totalPage2,
  perPage2,
  dataTableStatisticsOfModuleCompany,
  handleChangeSearch,
  paramsSearch,
  listStatusCompanySelect,
  listInverter,
  activeTab,
  handleSubmitSearch,
  dateTime,
}: Props) => {
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
      <BoxGroup dataBoxContent={dataBoxContent} />
      <FilterSearch
        listStatusCompanySelect={listStatusCompanySelect}
        listInverter={listInverter}
        listInverter1={listInverter}
        handleChangeSearch={handleChangeSearch}
        paramsSearch={paramsSearch}
        isShowDupInverter
        handleSubmitSearch={handleSubmitSearch}
        activeTab={activeTab}
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
        <div className="group-char-right">{/* Add  Chart */}</div>
      </div>
      <TitleSubHeader title="발전 통계" />
      <GroupActionDownload
        paramsSearch={paramsSearch}
        handleChangeSearch={handleChangeSearch}
        linkDownTable={`generator/statistic?inverter_id=${activeTab}&com_id=${paramsSearch?.company}&time_to=${dateTime?.to}&time_from=${dateTime?.from}&type=${paramsSearch?.classification}`}
      />
      <div>
        <Table
          tableHeads={headStatisticsCompany}
          tableBody={rawData}
          // isShowId
        />
        <div className="opacity d-block pagination mt-0">
          {totalPage > perPage && (
            <div className="wrapper-device__pagination mt-0">
              <Pagination
                activePage={paramsSearch?.page}
                itemsCountPerPage={perPage}
                totalItemsCount={totalPage}
                pageRangeDisplayed={5}
                onChange={(e) => handleChangeSearch(e, 'page')}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}
        </div>
      </div>

      {/*  Table Bottom */}
      <TitleSubHeader title="모듈,외기 온도 / 일사량 통계" />
      <div className="group-option-table d-flex  justify-content-between mb-3">
        <SelectDropdown
          placeholder="구분"
          listItem={listPaginationType}
          onChange={(option) => handleChangeSearch(option, 'pagination2')}
          option={paramsSearch?.pagination2 || null}
          noOptionsMessage={() => '옵션 없음'}
        />
        <ButtonDownExcel
          linkDownTable={`generator/statistic?inverter_id=${activeTab}&com_id=${paramsSearch?.company}&time_to=${dateTime?.to}&time_from=${dateTime?.from}&type=${paramsSearch?.classification}`}
          keyName="solar"
        />
      </div>
      <Table
        tableHeads={headStatisticsOfModuleCompany}
        tableBody={dataTableStatisticsOfModuleCompany}
        // isShowId
      />
      <div className="opacity d-block pagination mt-0">
        {totalPage > perPage && (
          <div className="wrapper-device__pagination mt-0">
            <Pagination
              activePage={paramsSearch?.page2}
              itemsCountPerPage={perPage2}
              totalItemsCount={totalPage2}
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

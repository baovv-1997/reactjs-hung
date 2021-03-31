// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';
import Pagination from 'react-js-pagination';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';

import SelectDropdown from 'commons/components/Select';
import Button from 'commons/components/Button';
import { listPaginationType } from 'constants/listKey';
import ROUTERS from 'constants/routers';
import { useHistory } from 'react-router-dom';
import { operator_event_filter } from 'constants/optionCheckbox';

// import LineSeriesChart from 'commons/components/LineChart';
import {
  headStatusCompany,
  headOperationStatusByAreaCompany,
} from './constants';
import BoxGroup from './BoxGroup';
import GroupCompareChart from './GroupCompareChart';
import GroupActionDownload from './GroupActionDownload';
import { ButtonDownExcel } from 'commons/components/ButtonDownExcel';

type Props = {
  listMockupDataCompany: any,

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
  activeTab: string,
  id: string,
  dataChart: Array,
  optionFilters: Array,
};

const ItemContentTab = ({
  listMockupDataCompany,
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
  activeTab,
  optionFilters,
  id,
  dataChart,
}: Props) => {
  const history = useHistory();

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
          {/* {activeTab === id.toString() && (
            <LineSeriesChart
              width={1100}
              height={450}
              dataChart={dataChart}
              activeTab={activeTab}
            />
          )} */}
        </div>
      </div>

      <TitleSubHeader title="실시간 계측 현황" />
      <GroupActionDownload
        linkDownTable={`operator/status?inverter_id=${activeTab}&com_id=${paramsSearch?.company}`}
        paramsSearch={paramsSearch}
        handleChangeSearch={handleChangeSearch}
      />
      <div>
        <Table
          tableHeads={headStatusCompany}
          tableBody={listMockupDataCompany}
          isShowId={false}
        />
        <div className="opacity d-block pagination mt-0 mb-3">
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
      <TitleSubHeader title="이벤트 현황" />
      <div className="group-option-table d-flex  justify-content-between mb-3">
        <SelectDropdown
          placeholder="구분"
          listItem={listPaginationType}
          onChange={(option) => handleChangeSearch(option, 'pagination2')}
          option={paramsSearch?.pagination2 || null}
          noOptionsMessage={() => '옵션 없음'}
        />
        <div className="group-btn-download">
          <ButtonDownExcel
            linkDownTable={`operator/event?inverter_id=${activeTab}&com_id=${paramsSearch?.company}`}
            keyName="solar"
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
      />
      <div className="group-btn-register text-right">
        <Button onClick={() => history.push(`${ROUTERS.EVENT}/register`)}>
          등록
        </Button>
      </div>
      <div className="opacity d-block pagination mt-0">
        {totalPage2 > perPage2 && (
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

// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import SelectDropdown from 'commons/components/Select';
import { listPaginationType } from 'constants/listKey';
import Pagination from 'react-js-pagination';
import { ButtonDownExcel } from 'commons/components/ButtonDownExcel';
import LineChart2 from 'commons/components/LineChart/LineChart2';
import IMAGES from 'themes/images';
import {
  headTestSolarMonitoringOperationStatus,
  headTestMockupStatisticsOfModule,
} from '../constant';
import BoxGroup from './BoxGroup';
import GroupCompareChart from './GroupCompareChart';
import GroupActionDownload from '../GroupActionDownload';

type Props = {
  listMockupDataCompany: any,
  dataBoxContent: Object,
  handleChangeSearch: Function,
  paramsSearch: Object,
  totalPage: number,
  perPage: number,
  totalPage2: number,
  perPage2: number,
  dataTableBottom: Array<{
    id: number,
  }>,
  dataChartOperation: Array<{}>,
  isProcessingRaw: boolean,
};

const ItemContentTab = ({
  listMockupDataCompany,
  dataBoxContent,
  handleChangeSearch,
  paramsSearch,
  totalPage,
  perPage,
  totalPage2,
  perPage2,
  dataTableBottom,
  dataChartOperation,
  isProcessingRaw2,
  isProcessingRaw,
}: Props) => {
  const dataLengthChart = [
    {
      id: 1,
      name: 'PV전압(V)',
      color: '#8567b4',
    },
    {
      id: 2,
      name: 'PV전류(A)',
      color: '#c05e13',
    },
    {
      id: 3,
      name: '출력전류(A)',
      color: '#fe8224',
    },
    {
      id: 4,
      name: '출력(KW)',
      color: '#ffcc00',
    },
    {
      id: 5,
      name: '출력전압(V)',
      color: '#102a82',
    },
  ];

  return (
    <div className="content-wrap-tab">
      <BoxGroup dataBoxContent={dataBoxContent} />
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
          <LineChart2
            dataChart={dataChartOperation}
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
        </div>
      </div>
      <TitleSubHeader title="실시간 계측 현황" />
      <GroupActionDownload
        linkDownTable={`generator/statistic?inverter_id=${paramsSearch?.company}`}
        paramsSearch={paramsSearch}
        handleChangeSearch={handleChangeSearch}
      />
      <div className="mb-4">
        <Table
          tableHeads={headTestSolarMonitoringOperationStatus}
          tableBody={listMockupDataCompany}
          isShowId
          isLoading={isProcessingRaw}
        />
        <div className="opacity d-block pagination">
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
      <TitleSubHeader title="모듈,외기 온도 / 일사량 통계" />
      <div className="group-option-table d-flex  justify-content-between">
        <SelectDropdown
          placeholder="구분"
          listItem={listPaginationType}
          onChange={(option) => handleChangeSearch(option, 'pagination2')}
          option={paramsSearch?.pagination2 || null}
          noOptionsMessage={() => '옵션 없음'}
        />
        <div className="group-btn-download">
          <ButtonDownExcel
            linkDownTable={`generator/event?inverter_id=${paramsSearch?.company}`}
            keyName="test_solar"
            text="Sampling Data다운"
          />
        </div>
      </div>

      <Table
        tableHeads={headTestMockupStatisticsOfModule}
        tableBody={dataTableBottom}
        isShowId
        isLoading={isProcessingRaw2}
      />
      <div className="opacity d-block pagination mt-0">
        {totalPage2 > perPage2 && !isProcessingRaw2 && (
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

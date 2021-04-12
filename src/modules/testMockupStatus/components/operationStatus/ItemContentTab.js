// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';
import LengthChart from 'commons/components/LengthChart';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import SelectDropdown from 'commons/components/Select';
import { listPaginationType } from 'constants/listKey';
import { test_modal_search } from 'constants/optionCheckbox';
import ROUTERS from 'constants/routers';
import Pagination from 'react-js-pagination';
import { useSelector } from 'react-redux';
import { Button } from 'commons/components/Button';
import { useHistory } from 'react-router-dom';
import IMAGES from 'themes/images';
import moment from 'moment';
import { ButtonDownExcel } from 'commons/components/ButtonDownExcel';
import { LineChart } from 'commons/components/LineChart/lineChart';
import BoxGroup from './BoxGroup';
import GroupCompareChart from './GroupCompareChart';
import GroupActionDownload from '../GroupActionDownload';
import {
  headTestMockupOperationStatus,
  headOperationStatusByAreaCompany,
} from '../constant';

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
  isShowModalSorting: boolean,
  handleClickDetail: Function,
  dataChartOperation: Object,
  optionFilters: any,
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
  isShowModalSorting,
  handleClickDetail,
  dataChartOperation,
  optionFilters,
}: Props) => {
  const history = useHistory();
  const { userInfo } = useSelector((state) => state?.account);
  const roles = userInfo?.roles[0]?.name || '';
  const dataLengthChart = [
    {
      id: 1,
      name: 'AC전압(V)',
      color: '#8567b4',
    },
    {
      id: 2,
      name: 'AC전류(A)',
      color: '#c05e13',
    },
    {
      id: 3,
      name: 'AC전력(kW)',
      color: '#fe8224',
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
          <LineChart
            dataChart={dataChartOperation}
            unitLine1="V"
            unitLine2="A"
            unitLine3="kW"
            optionLine={{
              line1: paramsSearch?.ACVoltage,
              line2: paramsSearch?.ACCurrent,
              line3: paramsSearch?.ACPower,
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
        paramsSearch={paramsSearch}
        handleChangeSearch={handleChangeSearch}
        linkDownTable={`generator/status?inverter_id=${paramsSearch?.company}`}
      />
      <div className="mb-4">
        <Table
          tableHeads={headTestMockupOperationStatus}
          tableBody={listMockupDataCompany}
          isShowId
        />
        <div className="opacity d-block pagination">
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
      <TitleSubHeader title="이벤트 현황" />
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
            keyName="test_mockup"
          />
        </div>
      </div>
      <Table
        tableHeads={headOperationStatusByAreaCompany}
        tableBody={
          (dataTableBottom &&
            dataTableBottom.length > 0 &&
            dataTableBottom.map((event) => ({
              id: event?.id,
              rowId: event.no,
              dateTime: moment(event?.created_at).format('YYYY-MM-DD hh:mm:ss'),
              comName: event?.com_name,
              inverterID: event?.ds_id,
              eventName: event?.evt_type_label,
              contents: event?.evt_content,
            }))) ||
          []
        }
        isShowId
        handleCheckboxSort={(option) => handleChangeSearch(option, 'checkBox')}
        handleShowModalSorting={() => handleChangeSearch('', 'modal')}
        showModalSort={{
          isShow: isShowModalSorting,
          keyItem: 4,
        }}
        onClickRow={handleClickDetail}
        listOption={test_modal_search}
        optionDefault={optionFilters}
      />
      {(roles === 'admin' || roles === 'company') && (
        <div className="group-btn-register text-right">
          <Button
            onClick={() =>
              history.push({
                pathname: `${ROUTERS.EVENT}/register`,
                state: { typeEvent: 'mockup' },
              })
            }
          >
            등록
          </Button>
        </div>
      )}
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

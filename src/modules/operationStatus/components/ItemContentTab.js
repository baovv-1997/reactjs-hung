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

type Props = {
  headStatusCompany: Array<{ id: number, name: string }>,
  listMockupDataCompany: any,
  dataContent: Object,
  powerData: Object,
  temperatureData: Object,
  insolationData: Object,
  handleToggleCheckbox: Function,
  checkBox: Object,
  paginationType: Object,
  handleChangePagination: Function,
  handleDownloadTrend: Function,
  handleDownloadRaw: Function,
};

const ItemContentTab = ({
  headStatusCompany,
  listMockupDataCompany,
  dataContent,
  powerData,
  temperatureData,
  insolationData,
  handleToggleCheckbox,
  checkBox,
  paginationType,
  handleChangePagination,
  handleDownloadTrend,
  handleDownloadRaw,
}: Props) => {
  console.log(dataContent, 'dataContent');
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
                name="PVVoltage"
                isChecked={checkBox?.PVVoltage}
                label="PV전압"
                subLabel="v1"
                id="PVVoltage"
                handleToggleCheckbox={() =>
                  handleToggleCheckbox(checkBox?.PVVoltage, 'PVVoltage')
                }
              />
              <CheckBox
                name="PVCurrent"
                id="PVCurrent"
                subLabel="l1"
                isChecked={checkBox?.PVCurrent}
                label="PV전류"
                handleToggleCheckbox={() =>
                  handleToggleCheckbox(checkBox?.PVCurrent, 'PVCurrent')
                }
              />
              <CheckBox
                name="outputVoltage"
                id="outputVoltage"
                subLabel="v2"
                isChecked={checkBox?.outputVoltage}
                label="출력전압"
                handleToggleCheckbox={() =>
                  handleToggleCheckbox(checkBox?.outputVoltage, 'outputVoltage')
                }
              />
              <CheckBox
                name="outputCurrent"
                id="outputCurrent"
                subLabel="l2"
                isChecked={checkBox?.outputCurrent}
                label="출력전류"
                handleToggleCheckbox={() =>
                  handleToggleCheckbox(checkBox?.outputCurrent, 'outputCurrent')
                }
              />
              <CheckBox
                name="print"
                id="print"
                subLabel="p"
                isChecked={checkBox?.print}
                label="수평 일사량"
                handleToggleCheckbox={() =>
                  handleToggleCheckbox(checkBox?.print, 'print')
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
      <TitleSubHeader title="실시간 계측 현황" />
      <div className="group-option-table d-flex  justify-content-between mb-3">
        <SelectDropdown
          placeholder="구분"
          listItem={listPaginationType}
          onChange={(option) => handleChangePagination(option)}
          option={paginationType || null}
        />
        <div className="group-btn-download">
          <Button onClick={() => handleDownloadTrend()} customClass="mr-2">
            Trend 이미지 다운
          </Button>
          <Button onClick={() => handleDownloadRaw()}>Raw Date 다운</Button>
        </div>
      </div>
      <Table
        tableHeads={headStatusCompany}
        tableBody={listMockupDataCompany}
        // isShowId
      />
    </div>
  );
};

export default memo<Props>(ItemContentTab);

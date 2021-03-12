// @flow
import React, { memo } from 'react';
import Table from 'commons/components/Table';

import LabelStatusV2 from 'commons/components/Label/LabelStatus/LabelStatusV2';
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
  handleToggleCheckbox: Function,
  checkBox: Object,
  paginationType: Object,
  handleChangePagination: Function,
  handleDownloadTrend: Function,
  handleDownloadRaw: Function,
};

const ItemContentTab = ({
  listMockupDataCompany,
  dataContent,
  dataBoxContent,
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
        <LabelStatusV2
          nameStatus={dataBoxContent?.angleOfIncidence}
          angle="˚"
          title="입사각"
          keyStatus={1}
          color="#97c95e"
        />
        <LabelStatusV2
          nameStatus={dataBoxContent?.azimuth}
          angle="˚"
          title="방위각"
          keyStatus={2}
          color="#ab47bc"
        />
        <LabelStatusV2
          nameStatus={dataBoxContent?.moduleOutput}
          unit="W"
          title="모듈 출력"
          keyStatus={3}
          color="#3b74e7"
        />
        <LabelStatusV2
          nameStatus={dataBoxContent?.moduleColor}
          title="모듈 색상"
          keyStatus={4}
          color="#f55662"
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
          noOptionsMessage={() => '옵션 없음'}
        />
        <div className="group-btn-download">
          <Button onClick={() => handleDownloadTrend()} customClass="mr-2">
            Trend 이미지 다운
          </Button>
          <Button onClick={() => handleDownloadRaw()}>Raw Date 다운</Button>
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

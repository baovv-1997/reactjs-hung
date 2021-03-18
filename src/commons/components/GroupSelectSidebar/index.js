// @flow
// libs
import React, { memo } from 'react';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';

type Props = {
  paramsSearch: Object,
  listStatusCompanySelect: Array<{
    id: number,
    value: any,
    label: string,
  }>,
  listMockupType?: Array<{
    id: number,
    value: any,
    label: string,
  }>,
  listParkingLot?: Array<{
    id: number,
    value: any,
    label: string,
  }>,
  handleChangeSearch: Function,
};

export const GroupSelect = ({
  paramsSearch,
  listStatusCompanySelect,
  listMockupType = [],
  listParkingLot = [],
  handleChangeSearch,
}: Props) => {
  const renderListCompany =
    listStatusCompanySelect &&
    listStatusCompanySelect.map((item) => (
      <li
        key={item.id}
        onClick={() => handleChangeSearch(item, 'statusCompany')}
        onKeyPress={() => {}}
        role="menuitem"
        className={`${paramsSearch?.company === item.id ? 'active' : ''}`}
      >
        {item.label}
      </li>
    ));

  // const renderListMocKup =
  //   listMockupType &&
  //   listMockupType.map((item) => (
  //     <li
  //       key={item.id}
  //       onClick={() => handleChangeSearch(item, 'mockupType')}
  //       onKeyPress={() => {}}
  //       role="menuitem"
  //       className={`${paramsSearch?.mockupType === item.id ? 'active' : ''}`}
  //     >
  //       {item.label}
  //     </li>
  //   ));

  // const renderListParkingLot =
  //   listParkingLot &&
  //   listParkingLot.map((item) => (
  //     <li
  //       key={item.id}
  //       onClick={() => handleChangeSearch(item, 'parkingLot')}
  //       onKeyPress={() => {}}
  //       role="menuitem"
  //       className={`${paramsSearch?.parkingLot === item.id ? 'active' : ''}`}
  //     >
  //       {item.label}
  //     </li>
  //   ));
  return (
    <div>
      {listStatusCompanySelect && listStatusCompanySelect.length > 0 && (
        <div className="content-select-sidebar">
          <TitleSubHeader title="실증단지" />
          <ul className="list-item-select overflowY">{renderListCompany}</ul>
        </div>
      )}
      {/* {listMockupType && listMockupType.length > 0 && (
        <>
          <TitleSubHeader title="목업" titleLight="RTU" className="mt-5" />
          <ul className="list-item-select overflowY">{renderListMocKup}</ul>
        </>
      )}
      {listParkingLot && listParkingLot.length > 0 && (
        <>
          <TitleSubHeader title="주차장" className="mt-5" />
          <ul className="list-item-select overflowY">{renderListParkingLot}</ul>
        </>
      )} */}
    </div>
  );
};

GroupSelect.defaultProps = {
  listMockupType: [],
  listParkingLot: [],
};

export default memo<Props>(GroupSelect);

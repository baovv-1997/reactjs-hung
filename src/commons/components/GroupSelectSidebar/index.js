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
  // listInverter?: Array<{
  //   id: number,
  //   value: any,
  //   label: string,
  // }>,
  // listParkingLot?: Array<{
  //   id: number,
  //   value: any,
  //   label: string,
  // }>,
  handleChangeSearch: Function,
  subTitle?: boolean,
};

export const GroupSelect = ({
  paramsSearch,
  listStatusCompanySelect,
  // listInverter = [],
  // listParkingLot = [],
  handleChangeSearch,
  subTitle = true,
}: Props) => {
  console.log(paramsSearch?.company, 'paramsSearch?.company');
  const renderListCompany =
    listStatusCompanySelect &&
    listStatusCompanySelect.map((item) => (
      <li
        key={item.id}
        onClick={() => handleChangeSearch(item, 'statusCompany')}
        onKeyPress={() => {}}
        role="menuitem"
        className={`${
          paramsSearch?.company === item.id ||
          paramsSearch?.posSelected === item.id
            ? 'active'
            : ''
        }`}
      >
        {item.label}
      </li>
    ));

  // const renderListInverter =
  //   listInverter &&
  //   listInverter.map((item) => (
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
      <div className="content-select-sidebar">
        {listStatusCompanySelect && listStatusCompanySelect.length > 0 && (
          <>
            {subTitle && <TitleSubHeader title="실증단지" />}
            <ul className="list-item-select overflowY">{renderListCompany}</ul>
          </>
        )}
      </div>
      {/* {listInverter && listInverter.length > 0 && (
        <>
          <TitleSubHeader title="목업" titleLight="RTU" className="mt-5" />
          <ul className="list-item-select overflowY">{renderListInverter}</ul>
        </>
      )} */}
      {/* {listParkingLot && listParkingLot.length > 0 && (
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
  subTitle: true,
};

export default memo<Props>(GroupSelect);

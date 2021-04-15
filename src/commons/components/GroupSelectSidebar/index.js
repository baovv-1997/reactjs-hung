// @flow
// libs
import React, { memo } from 'react';
import TitleSubHeader from 'commons/components/TitleHeader/titleSub';
import Loading from '../Loading';

type Props = {
  paramsSearch: Object,
  listStatusCompanySelect: Array<{
    id: number,
    value: any,
    label: string,
  }>,
  handleChangeSearch: Function,
  subTitle?: boolean,
  isProcessing: boolean,
};

export const GroupSelect = ({
  paramsSearch,
  listStatusCompanySelect,
  handleChangeSearch,
  subTitle = true,
  isProcessing,
}: Props) => {
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
  return (
    <div>
      <div className="content-select-sidebar position-relative">
        {isProcessing ? (
          <Loading />
        ) : (
          <>
            {listStatusCompanySelect && listStatusCompanySelect.length > 0 && (
              <>
                {subTitle && <TitleSubHeader title="실증단지" />}
                <ul className="list-item-select overflowY">
                  {renderListCompany}
                </ul>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

GroupSelect.defaultProps = {
  listMockupType: [],
  listParkingLot: [],
  subTitle: true,
};

export default memo<Props>(GroupSelect);

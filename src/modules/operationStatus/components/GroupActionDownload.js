// @flow
// libs
import React, { memo } from 'react';
import SelectDropdown from 'commons/components/Select';
import { listPaginationType } from 'constants/listKey';
import { ButtonDownIMG } from 'commons/components/ButtonDownIMG';
import { ButtonDownExcel } from 'commons/components/ButtonDownExcel';

type Props = {
  paramsSearch: Object,
  handleChangeSearch: Function,
  linkDownTable: string,
};

export const GroupActionDownload = ({
  paramsSearch,
  handleChangeSearch,
  linkDownTable,
}: Props) => (
  <div className="group-option-table d-flex  justify-content-between">
    <SelectDropdown
      placeholder="구분"
      listItem={listPaginationType}
      onChange={(option) => handleChangeSearch(option, 'pagination')}
      option={paramsSearch?.pagination || null}
      noOptionsMessage={() => '옵션 없음'}
    />
    <div className="group-btn-download">
      <ButtonDownIMG />
      <ButtonDownExcel linkDownTable={linkDownTable} keyName="solar" />
    </div>
  </div>
);

export default memo<Props>(GroupActionDownload);

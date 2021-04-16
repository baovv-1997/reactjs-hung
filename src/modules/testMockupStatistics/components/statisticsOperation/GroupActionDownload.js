// @flow
// libs
import React, { memo } from 'react';
import SelectDropdown from 'commons/components/Select';
import { listPaginationType5PerPage } from 'constants/listKey';
import { ButtonDownIMG } from 'commons/components/ButtonDownIMG';
import { ButtonDownExcel } from 'commons/components/ButtonDownExcel';

type Props = {
  paramsSearch: Object,
  handleChangeSearch: Function,
  linkDownTable: string,
  text: string,
};

export const GroupActionDownload = ({
  paramsSearch,
  handleChangeSearch,
  text,
  linkDownTable,
}: Props) => (
  <div className="group-option-table d-flex  justify-content-between">
    <SelectDropdown
      placeholder="구분"
      listItem={listPaginationType5PerPage}
      onChange={(option) => handleChangeSearch(option, 'pagination')}
      option={paramsSearch?.pagination || null}
      noOptionsMessage={() => '옵션 없음'}
    />
    <div className="group-btn-download">
      <ButtonDownIMG />
      <ButtonDownExcel
        linkDownTable={linkDownTable}
        keyName="test_mockup"
        text={text}
      />
    </div>
  </div>
);

export default memo<Props>(GroupActionDownload);

// @flow
// libs
import React, { memo } from 'react';
import SelectDropdown from 'commons/components/Select';
import Button from 'commons/components/Button';
import { listPaginationType5PerPage } from 'constants/listKey';
import { ButtonDownIMG } from 'commons/components/ButtonDownIMG';

type Props = {
  paramsSearch: Object,
  handleChangeSearch: Function,
  handleDownloadTrend: Function,
  text: string,
};

export const GroupActionDownload = ({
  paramsSearch,
  handleChangeSearch,
  handleDownloadTrend,
  text,
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
      <Button onClick={() => handleDownloadTrend('raw')}>{text}</Button>
    </div>
  </div>
);

export default memo<Props>(GroupActionDownload);

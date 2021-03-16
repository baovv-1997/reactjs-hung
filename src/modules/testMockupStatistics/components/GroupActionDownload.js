// @flow
// libs
import React, { memo } from 'react';
import SelectDropdown from 'commons/components/Select';
import Button from 'commons/components/Button';
import { listPaginationType } from 'constants/listKey';

type Props = {
  paramsSearch: Object,
  handleChangeSearch: Function,
  handleDownloadTrend: Function,
};

export const GroupActionDownload = ({
  paramsSearch,
  handleChangeSearch,
  handleDownloadTrend,
}: Props) => (
  <div className="group-option-table d-flex  justify-content-between mb-3">
    <SelectDropdown
      placeholder="구분"
      listItem={listPaginationType}
      onChange={(option) => handleChangeSearch(option, 'pagination')}
      option={paramsSearch?.pagination || null}
      noOptionsMessage={() => '옵션 없음'}
    />
    <div className="group-btn-download">
      <Button onClick={() => handleDownloadTrend('trend')} customClass="mr-2">
        Trend 이미지 다운
      </Button>
      <Button onClick={() => handleDownloadTrend('raw')}>Raw Date 다운</Button>
    </div>
  </div>
);

export default memo<Props>(GroupActionDownload);

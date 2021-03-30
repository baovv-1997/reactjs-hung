// @flow
// libs
import React, { memo } from 'react';
import { ROUTES } from 'apis';
import SelectDropdown from 'commons/components/Select';
import Button from 'commons/components/Button';
import { listPaginationType } from 'constants/listKey';
import { ButtonDownIMG } from 'commons/components/ButtonDownIMG';

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
  <div className="group-option-table d-flex  justify-content-between mb-3">
    <SelectDropdown
      placeholder="구분"
      listItem={listPaginationType}
      onChange={(option) => handleChangeSearch(option, 'pagination')}
      option={paramsSearch?.pagination || null}
      noOptionsMessage={() => '옵션 없음'}
    />
    <div className="group-btn-download">
      <ButtonDownIMG />
      <Button onClick={() => {}}>
        <a
          href={`${ROUTES.API_DOWN_EXCEL_SOLAR_MONITORING(linkDownTable)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Raw Date 다운
        </a>
      </Button>
    </div>
  </div>
);

export default memo<Props>(GroupActionDownload);

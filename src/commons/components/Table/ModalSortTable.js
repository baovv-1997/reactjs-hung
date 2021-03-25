// @flow
import React, { memo, useState } from 'react';
import Button from 'commons/components/Button';
import MutipleCheckbox from 'commons/components/MultipleCheckbox';

type Props = {
  handleCheckboxSort: Function,
  listOption?: Array<{}>,
  optionDefault?: Array<string>,
};

const ModalSortTable = ({
  handleCheckboxSort,
  listOption = [],
  optionDefault = [],
}: Props) => {
  const [listValueOption, setListValueOption] = useState([]);
  const handleGetValue = (list) => {
    setListValueOption(list);
  };
  return (
    <div className="modal-sorting">
      <div className="checkbox-header">이벤트명 필터</div>
      <div className="list-checkbox">
        <MutipleCheckbox
          listCheckBox={listOption}
          submitValue={handleGetValue}
          optionDefault={optionDefault}
        />
      </div>
      <Button onClick={() => handleCheckboxSort(listValueOption)}>등록</Button>
    </div>
  );
};

ModalSortTable.defaultProps = {
  optionDefault: [],
  listOption: [],
};

export default memo<Props>(ModalSortTable);

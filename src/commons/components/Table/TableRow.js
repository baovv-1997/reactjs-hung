// @flow

import React, { memo } from 'react';
import { checkIsNumber } from 'helpers';

type Props = {
  rowItem: Object,
  onClickTableRow?: Function,
  isShowId?: boolean,
  rowActive?: Object,
  isClickTableColumn?: boolean,
  onClickTableColumn?: Function,
};

const TableRow = ({
  rowItem,
  onClickTableRow = () => {},
  isClickTableColumn = false,
  isShowId = false,
  rowActive = {},
  onClickTableColumn = () => {},
}: Props) => {
  const fieldId = 'id';
  let activeClass = '';
  if (onClickTableRow) {
    activeClass = 'row-cursor-pointer';
  } else if (rowActive && rowActive.id === rowItem.id) {
    activeClass = 'row-active';
  }
  return (
    <tr
      onClick={() => onClickTableRow && onClickTableRow(rowItem)}
      className={activeClass}
    >
      {Object.keys(rowItem).map((item) => {
        return (
          <td
            key={item}
            className={`${
              // eslint-disable-next-line no-nested-ternary
              isShowId && item === fieldId
                ? 'd-none'
                : isClickTableColumn
                ? 'row-cursor-pointer'
                : ''
            } ${checkIsNumber(item)}`}
            onClick={() => isClickTableColumn && onClickTableColumn(rowItem)}
            onKeyPress={() => isClickTableColumn && onClickTableColumn(rowItem)}
            role="presentation"
          >
            {rowItem[item]}
          </td>
        );
      })}
    </tr>
  );
};
TableRow.defaultProps = {
  onClickTableRow: null,
  isShowId: false,
  onClickTableColumn: () => {},
  isClickTableColumn: false,
  rowActive: {},
};
export default memo<Props>(TableRow);

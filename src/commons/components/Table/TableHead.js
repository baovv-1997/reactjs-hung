// @flow
import React, { memo } from 'react';
import ModalSortTable from './ModalSortTable';

type Props = {
  listItems: Array<{ id: number, name: string }>,
  showModalSort?: any,
  handleCheckboxSort?: Function,
};

const TableHead = ({ listItems, showModalSort, handleCheckboxSort }: Props) => (
  <tr>
    {listItems &&
      listItems.map((item, index) => (
        <th
          key={item.id}
          className={`${
            showModalSort && showModalSort.keyItem === index
              ? 'cursor-pointer w-188'
              : ''
          }`}
        >
          {item && item.name}
          {showModalSort && showModalSort.keyItem === index && (
            <div>
              <ModalSortTable handleCheckboxSort={handleCheckboxSort} />
            </div>
          )}
        </th>
      ))}
  </tr>
);

TableHead.defaultProps = {
  showModalSort: null,
  handleCheckboxSort: () => {},
};

export default memo<Props>(TableHead);

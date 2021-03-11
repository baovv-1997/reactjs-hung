// @flow
import React, { memo } from 'react';
import images from 'themes/images';
import ModalSortTable from './ModalSortTable';

type Props = {
  listItems: Array<{ id: number, name: string }>,
  showModalSort?: any,
  handleCheckboxSort?: Function,
  handleShowModalSorting?: Function,
};

const TableHead = ({
  listItems,
  showModalSort,
  handleCheckboxSort,
  handleShowModalSorting,
}: Props) => (
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
          <div
            onKeyPress={() => {}}
            role="button"
            tabIndex={index}
            onClick={() =>
              showModalSort && showModalSort.keyItem === index
                ? handleShowModalSorting && handleShowModalSorting()
                : {}
            }
          >
            {item && item.name}
            {showModalSort && showModalSort.keyItem === index && (
              <img src={images.ico_event2} alt="" />
            )}
          </div>
          {showModalSort &&
            showModalSort.isShow &&
            showModalSort.keyItem === index && (
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
  handleShowModalSorting: () => {},
};

export default memo<Props>(TableHead);

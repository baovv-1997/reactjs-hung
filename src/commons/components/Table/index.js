// @flow
import React, { memo } from 'react';
import { Table } from 'react-bootstrap';
import TableHead from './TableHead';
import TableRow from './TableRow';
import Loading from 'commons/components/Loading';

type Props = {
  tableHeads: Array<{ id: number, name: string }>,
  tableBody: Array<{ id: number }>,
  onClickRow?: Function,
  handleClickBtnDetail?: Function,
  isShowId?: boolean,
  rowActive?: Function,
  onClickTableColumn?: Function,
  showModalSort?: any,
  handleCheckboxSort?: Function,
  handleShowModalSorting?: Function,
  listOption?: Array<{}>,
  optionDefault?: Array<string>,
  isLoading: boolean,
};

const TableData = ({
  tableHeads,
  tableBody,
  onClickRow = () => {},
  handleClickBtnDetail = () => {},
  isShowId = false,
  rowActive = {},
  onClickTableColumn = () => {},
  showModalSort = '',
  handleCheckboxSort = () => {},
  handleShowModalSorting = () => {},
  listOption = [],
  optionDefault = [],
  isLoading,
}: Props) => {
  const renderBodyTable =
    tableBody &&
    tableBody.map((item, index) => (
      <TableRow
        onClickTableRow={onClickRow}
        rowItem={item}
        key={item.id || index}
        rowActive={rowActive}
        handleClickBtnDetail={handleClickBtnDetail}
        isShowId={isShowId}
        onClickTableColumn={onClickTableColumn}
      />
    ));

  const renderBody = () => {
    if (renderBodyTable && renderBodyTable.length > 0) {
      return renderBodyTable;
    }
    return (
      <tr className="p-3 text-center table-no-data w-100">
        <td colSpan={tableHeads && tableHeads.length}>
          <p className="mb-0 text-center">데이터가 존재하지 않습니다.</p>
        </td>
      </tr>
    );
  };

  return (
    <Table striped bordered hover responsive className="position-relative">
      <thead>
        <TableHead
          listItems={tableHeads}
          showModalSort={showModalSort}
          handleCheckboxSort={handleCheckboxSort}
          handleShowModalSorting={handleShowModalSorting}
          listOption={listOption}
          optionDefault={optionDefault}
        />
      </thead>
      <tbody>
        {isLoading ? (
          <tr className="p-3 text-center table-no-data w-100">
            <td colSpan={tableHeads && tableHeads.length} className="pt-5 mt-3">
              <Loading />
            </td>
          </tr>
        ) : (
          <>{renderBody()}</>
        )}
      </tbody>
    </Table>
  );
};

TableData.defaultProps = {
  onClickRow: null,
  rowActive: null,
  handleClickBtnDetail: () => {},
  isShowId: false,
  onClickTableColumn: () => {},
  showModalSort: '',
  handleCheckboxSort: () => {},
  handleShowModalSorting: () => {},
  listOption: [],
  optionDefault: [],
};
export default memo<Props>(TableData);

// @flow
// libs
import React, { memo } from 'react';
import { ROUTES } from 'apis';
import Button from 'commons/components/Button';

type Props = {
  linkDownTable: string,
  keyName: string,
};

export const ButtonDownExcel = ({ linkDownTable, keyName }: Props) => {
  let LINK_API = '';
  switch (keyName) {
    case 'solar':
      LINK_API = `${ROUTES.API_DOWN_EXCEL_SOLAR_MONITORING(linkDownTable)}`;
      break;
    case 'test_mockup':
      LINK_API = `${ROUTES.API_DOWN_EXCEL_MOCKUP(linkDownTable)}`;
      break;
    case 'test_solar':
      LINK_API = `${ROUTES.API_DOWN_EXCEL_TEST_SOLAR_MONITORING(
        linkDownTable
      )}`;
      break;
    default:
      break;
  }
  return (
    <Button onClick={() => {}}>
      <a href={LINK_API} target="_blank" rel="noopener noreferrer">
        Raw Data 다운
      </a>
    </Button>
  );
};

export default memo<Props>(ButtonDownExcel);

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Card } from 'commons/components/Card';
import logo from 'assets/images/logo_company/logo_l&c@3x.png';
import logo2 from 'assets/images/logo_company/logo_cnbm@3x.png';

const cardData = {
  title: '본사 건물 앞',
  listItem: [
    { title: 'date', specifications: 3439, progress: 60 },
    { title: 'month', specifications: 16, progress: 50 },
    { title: 'year', specifications: 1621, progress: 80 },
    { title: 'power', specifications: 4.1, progress: 70 },
  ],
  listCompany: [
    { id: 1, logo },
    { id: 2, logo: logo2 },
  ],
};

storiesOf('Card', module).add('Default', () => {
  const { title, listItem, listCompany } = cardData;
  return (
    <Card
      title={title}
      listItem={listItem}
      listCompany={listCompany}
      logoClick={action('on-logo-click')}
      titleClick={action('on-title-click')}
    />
  );
});

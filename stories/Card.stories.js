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

const cardCompanyData = {
  title: '벤치 벽면',
  listItem: [
    { title: 'power-day', specifications: 100, progress: 5 },
    { title: 'max-power-day', specifications: 500, progress: 30 },
    { title: 'rate-power-day', specifications: 20, progress: 10 },
    { title: 'current-month', specifications: 1621, progress: 35 },
    { title: 'current-year', specifications: 1611, progress: 40 },
    { title: 'amount-power', specifications: 4.1, progress: 45 },
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

storiesOf('Card', module).add('logoTop', () => {
  const { title, listItem, listCompany } = cardData;
  return (
    <Card
      title={title}
      listItem={listItem}
      listCompany={listCompany[0]}
      logoClick={action('on-logo-click')}
      titleClick={action('on-title-click')}
      customClass="card-company"
      isCardCompany
    />
  );
});

storiesOf('Card', module).add('cardCompany', () => {
  const { title, listItem } = cardCompanyData;
  return (
    <Card
      title={title}
      listItem={listItem}
      titleClick={action('on-title-click')}
      customClass="card-company"
      isCardCompany
      // isEvent
    />
  );
});

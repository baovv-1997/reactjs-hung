import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Search from 'commons/components/Search';

storiesOf('Search', module).add('Default', () => (
  <Search placeholder="Search" handleClick={action('on-click')} />
));

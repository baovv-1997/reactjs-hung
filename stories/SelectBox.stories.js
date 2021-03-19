import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SelectBox from 'commons/components/SelectBox';

storiesOf('SelectBox', module).add('Default', () => (
  <SelectBox
    options={['a', 'b', 'c']}
    label="abc"
    onChange={action('on-click')}
  />
));

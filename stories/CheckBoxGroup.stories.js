import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CheckBox from 'commons/components/CheckBox';
import CheckBoxGroup from 'commons/components/CheckBoxGroup';

import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);
storiesOf('CheckBoxGroup', module).add('Checkbox', () => (
  <CheckBoxGroup legend="Checkbox Group">
    <CheckBox
      name="New Box"
      id="testId"
      label="Drivers License"
      onChange={action('on-change')}
    />
  </CheckBoxGroup>
));

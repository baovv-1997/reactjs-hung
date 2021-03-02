import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { MutipleCheckbox } from 'commons/components/MultipleCheckbox';

import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

storiesOf('CheckBoxGroup', module).add('Mutiple checkbox', () => {
  const checkboxes = [
    {
      name: 'check-box-1',
      key: 'checkBox1',
      label: 'Check Box 1',
    },
    {
      name: 'check-box-2',
      key: 'checkBox2',
      label: 'Check Box 2',
    },
  ];

  return (
    <MutipleCheckbox
      listCheckBox={checkboxes}
      label="Mutiple checkbox"
      customClass=""
    />
  );
});

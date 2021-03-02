import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Input from 'commons/components/Input';

storiesOf('Input', module).add('Default', () => {
  const [value, setValue] = useState('');
  return (
    <Input
      placeholder="Enter"
      label="label"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
});

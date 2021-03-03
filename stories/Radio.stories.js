// Libs
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Radio from '../src/commons/components/Radio';

storiesOf('Radio', module).add('Primary', () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Radio
      onChange={() => setIsChecked(!isChecked)}
      isChecked={isChecked}
      labelRadio="설치위치"
    />
  );
});

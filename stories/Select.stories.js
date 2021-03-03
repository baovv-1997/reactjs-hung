// Libs
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { withInfo } from '@storybook/addon-info';

// Component
import SelectDropdown from 'commons/components/Select';

const listItem = [
  { value: 'naver.com', label: 'naver.com' },
  { value: 'hanmail.net', label: 'hanmail.net' },
  { value: 'nate.com', label: 'nate.com' },
  { value: 'gmail.com', label: 'gmail.com' },
];

storiesOf('Select', module)
  // .addDecorator(withInfo)
  .add('Outline', () => {
    const [option, seOption] = useState(listItem[0]);
    console.log(option, 'option');
    return (
      <SelectDropdown
        placeholder="List Selects"
        label="Select"
        listItem={listItem}
        onChange={(option) => {
          action('on-change');
          seOption(option);
        }}
        option={option}
        disabled={false}
        isSearchable={false}
        blurInputOnSelect={false}
      />
    );
  });

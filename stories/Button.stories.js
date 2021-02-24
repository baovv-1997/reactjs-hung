import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from 'commons/components/Button';

storiesOf('Input', module).add('Default', () => (
  <Button type="submit" onClick={action('on-click')}>
    Button
  </Button>
));

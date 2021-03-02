import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { action } from '@storybook/addon-actions';
import { MainLayout } from 'layout/MainLayout';

storiesOf('MainLayout', module).add('Default', () => (
  <Router>
    <MainLayout>children</MainLayout>
  </Router>
));

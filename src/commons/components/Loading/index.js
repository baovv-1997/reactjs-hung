// @flow
// libs
import React from 'react';
import { Spinner } from 'react-bootstrap';

export const Loading = () => (
  <div className="loading-main">
    <Spinner animation="border" variant="warning" size="sm" />
  </div>
);

export default Loading;

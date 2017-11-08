// @flow

import React from 'react';

import type { Error } from '../redux/types/common';

const Notification = ({
  isFetching,
  error,
}: {
  isFetching: boolean,
  error: ?Error,
}) => {
  if (isFetching) {
    return <p>{'isFetching...'}</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return null;
};

export default Notification;

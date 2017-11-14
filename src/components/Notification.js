// @flow

import React from 'react';

import type { Error } from '../redux/types/common';

type Props = {
  isFetching: boolean,
  error: ?Error,
};

const Notification = ({ isFetching, error }: Props) => {
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isFetching) {
    return <p>{'Fetching...'}</p>;
  }
  return null;
};

export default Notification;

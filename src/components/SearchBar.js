// @flow

import React from 'react';

const SearchBar = ({ search }: { search: string => mixed }) => (
  <input
    type={'text'}
    placeholder={'Search'}
    onChange={event => search(event.target.value)}
  />
);

export default SearchBar;

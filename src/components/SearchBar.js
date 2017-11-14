// @flow

import React from 'react';

type Props = {
  onSearch: string => void,
};

const SearchBar = ({ onSearch }: Props) => {
  const handleChange = event => onSearch(event.currentTarget.value);

  return <input type={'text'} placeholder={'Search'} onChange={handleChange} />;
};

export default SearchBar;

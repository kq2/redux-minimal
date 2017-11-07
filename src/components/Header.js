// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            {'Home'}
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/users">
            {'Users'}
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

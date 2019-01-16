import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Filter
      </a>

      <a className="menu-item" href="/laravel">
        Time of Design
      </a>

      <a className="menu-item" href="/angular">
        Score
      </a>

      <a className="menu-item" href="/react">
        Game Numbers
      </a>

      <a className="menu-item" href="/vue">
        Game Numbers per day
      </a>
    </Menu>
  );
};
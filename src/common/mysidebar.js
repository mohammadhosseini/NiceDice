import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Filter
      </a>

      <a className="menu-item" href="/">
        Time of Design
      </a>

      <a className="menu-item" href="/">
        Score
      </a>

      <a className="menu-item" href="/">
        Game Numbers
      </a>

      <a className="menu-item" href="/">
        Game Numbers per day
      </a>
    </Menu>
  );
};
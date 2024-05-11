// TopMenu.js
import React from 'react';
import '../../styles/TopMenu.css';

function TopMenu({ menuItems }) {
  return (
    <div className="top-menu">
      {menuItems.map((menuItem, index) => (
        <div key={index}>{menuItem}</div>
      ))}
    </div>
  );
}

export default TopMenu;
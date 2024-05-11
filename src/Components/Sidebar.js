// Sidebar.js
import React from 'react';

function Sidebar({ items }) {
  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default Sidebar;
// Sidebar.js
import React from 'react';
import '../../styles/Sidebar.css';

function Sidebar({ items, onItemClick }) {
  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <div key={index} onClick={() => onItemClick(item)}>
          <a href="#">{item}</a>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;


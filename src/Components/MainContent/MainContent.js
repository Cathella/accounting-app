import React from 'react';
import '../../styles/MainContent.css';

function MainContent({ title, createElementButton }) {
  return (
    <div className="main-content">
      <h2>{title}</h2>
      {createElementButton}
      {/* {children} */}
    </div>
  );
}

export default MainContent;

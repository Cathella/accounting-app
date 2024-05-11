import React from 'react';

function MainContent({ title, onCreateTransaction }) {
  return (
    <div className="main-content">
      <h2>{title}</h2>
      <button onClick={onCreateTransaction}>Create Transaction</button>
    </div>
  );
}

export default MainContent;

import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import TopMenu from './TopMenu/TopMenu';
import Button from './Button';
import '../styles/Dashboard.css';

function Dashboard({ sidebarItems, topMenuItems }) {
  const [selectedContent, setSelectedContent] = useState(null);
  // const [elementType, setElementType] = useState(null);

  const handleSidebarItemClick = (content, type) => {
    setSelectedContent(content);
    // setElementType(type);
  };

  const handleCreateTransaction = () => {
    // Logic for creating a transaction
    console.log('Creating a transaction...');
  };

  let title;

  switch (selectedContent) {
    case 'Dashboard':
      title = 'Dashboard';
      break;
    case 'Chart of Accounts':
      title = 'Chart of Accounts';
      break;
    case 'Transactions':
      title = 'Transactions';
      break;
    case 'People':
      title = 'People';
      break;
    case 'Banking':
      title = 'Banking';
      break;
    case 'Bill & Invoices':
      title = 'Bill & Invoices';
      break;
    case 'Files':
      title = 'Files';
      break;
    case 'Reports':
      title = 'Reports';
      break;
    default:
      title = 'Dashboard';
  }

  return (
    <div className="dashboard">
      <Sidebar items={sidebarItems} onItemClick={handleSidebarItemClick} />
      <div className="content">
        <TopMenu menuItems={topMenuItems} />
        <div className="main-content">
          <div className="top-main-content">
            <h2>{title}</h2>
            <Button onClick={handleCreateTransaction} />
          </div>
          <div className="bottom-main-content">
            <div className="empty-state">
              <img src="./img/empty.png"
                alt="Empty file"
                className="empty-file" 
              />
              <div className="state-message">
                <h3>Record Your Financials</h3>
                <p>It looks like you haven't created any transactions yet. Let's begin by clicking the Create Transaction button.</p>
              </div>
            </div>
          </div>
          <img 
            src="./img/Arrow.png" 
            alt="Arrow" 
            className="arrow" 
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
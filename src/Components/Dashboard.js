// Dashboard.js
import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import TopMenu from './TopMenu/TopMenu';
import MainContent from './MainContent/MainContent';
import '../styles/Dashboard.css';

function Dashboard({ sidebarItems, topMenuItems }) {
  // Dummy data for demonstration
  const [selectedContent, setSelectedContent] = useState(null);

  const handleSidebarItemClick = (content) => {
    setSelectedContent(content);
  };

  const handleCreateTransaction = () => {
    // Logic for creating a new transaction
    console.log('Creating a new transaction...');
  };

  let contentToDisplay;
  switch (selectedContent) {
    case 'Transactions':
      contentToDisplay = (
        <MainContent
          title="Transactions"
          onCreateTransaction={handleCreateTransaction}
        >
          {/* Render transaction table here */}
          <p>Transaction table goes here</p>
        </MainContent>
      );
      break;
    case 'Accounts':
      contentToDisplay = (
        <MainContent title="Accounts">
          {/* Render accounts content here */}
          <p>Accounts content goes here</p>
        </MainContent>
      );
      break;
    // Add cases for other sidebar items as needed
    default:
      contentToDisplay = (
        <MainContent title="Dashboard">
          {/* Render default content here */}
          <p>Welcome to the dashboard!</p>
        </MainContent>
      );
  }

  return (
    <div className="dashboard">
      <Sidebar items={sidebarItems} onItemClick={handleSidebarItemClick} />
      <div className="content">
        <TopMenu menuItems={topMenuItems} />
        {contentToDisplay}
      </div>
    </div>
  );
}

export default Dashboard;

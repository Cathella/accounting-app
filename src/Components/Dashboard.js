import React from 'react';
import Sidebar from './Sidebar';
import TopMenu from './TopMenu';
import MainContent from './MainContent';

function Dashboard({ sidebarItems, topMenuItems, mainContent }) {
  return (
    <div className="dashboard">
      <Sidebar items={sidebarItems} />
      <div className="content">
        <TopMenu menuItems={topMenuItems} />
        <MainContent content={mainContent} />
      </div>
    </div>
  );
}

export default Dashboard;
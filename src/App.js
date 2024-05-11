import React from 'react';
import Dashboard from './Components/Dashboard';

function App() {
  const sidebarItems = ['Dashboard', 'Chart of Accounts', 'Transactions', 'People', 'Banking', 'Bill & Invoices', 'Files', 'Reports'];
  const topMenuItems = ['Home', 'Profile', 'Settings'];
  const mainContent = 'Main content goes here.';

  return (
    <div className="App">
      <Dashboard
        sidebarItems={sidebarItems}
        topMenuItems={topMenuItems}
        mainContent={mainContent}
      />
    </div>
  );
}

export default App;

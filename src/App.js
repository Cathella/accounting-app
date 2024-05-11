// App.js
import React from 'react';
import Dashboard from './Components/Dashboard';

function App() {
  // Dummy data for demonstration
  const sidebarItems = ['Dashboard', 'Transactions', 'Reports'];
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

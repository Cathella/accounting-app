import React, { useState } from 'react';
import { ChevronDown, Plus, BellDot } from 'lucide-react';
import '../../styles/TopMenu.css';

function TopMenu({ menuItems }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCreateEntry = () => {
    // Logic for creating a new entry
    console.log('Creating a new entry...');
  };

  return (
    <div className="top-menu">
      <button className="new-entry" onClick={handleCreateEntry}>
        <Plus />
        <span>New Entry</span>
      </button>
      <div className="bell">
        <BellDot />
      </div>
      <div className="profile-dropdown">
        <img
          src="./img/profile-pic.png"
          alt="Profile"
          className="profile-picture"
        />
        <p className="profile-name">Nakitto Catherine</p>
        <ChevronDown />
        {isDropdownOpen && (
          <div className="dropdown-content">
            {/* Additional profile information */}
          </div>
        )}
      </div>
    </div>
  );
}

export default TopMenu;
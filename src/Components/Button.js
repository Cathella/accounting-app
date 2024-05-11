import React from 'react';
import { Plus } from 'lucide-react';
import '../styles/Button.css';

function Button({ onClick }) {
  return (
    <button className='create-btn' onClick={onClick}>
      <Plus />
      <span>Create Transaction</span>
    </button>
  );
}

export default Button;
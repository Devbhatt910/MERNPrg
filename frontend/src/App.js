import React from 'react';
import { CssBaseline } from '@mui/material';
import HomePage from './components/HomePage'; // Adjust the path based on your folder structure

function App() {
  return (
    <div>
      <CssBaseline /> {/* This component helps with consistent baseline styling */}
      <HomePage />
    </div>
  );
}

export default App;
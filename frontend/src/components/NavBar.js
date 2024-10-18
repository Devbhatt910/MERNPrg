import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AuthModal from './AuthModal';
import { Button } from '@mui/material';

function Navbar() {
  const styles = {
    appBar: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white
      backdropFilter: 'blur(10px)', // Blurring effect for better readability
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
    },
    title: {
      flexGrow: 1,
      fontFamily: 'Cursive', // A more playful font
      color: '#D32F2F', // A food-related color (like a tomato red)
    },
    button: {
      marginLeft: '20px',
      color: '#D32F2F',
      borderColor: '#D32F2F',
      '&:hover': {
        backgroundColor: '#D32F2F',
        color: '#fff',
      },
    },
  };

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar>
        <Typography variant="h4" sx={styles.title}>
          Kitchen Delights
        </Typography>
        <AuthModal />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
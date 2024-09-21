import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
// import KitchenIcon from '@mui/icons-material/Kitchen'; // Import a kitchen icon
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';

function AuthModal() {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        {isLogin ? 'Login' : 'Signup'}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
            <SoupKitchenIcon sx={{ mr: 1 }} /> {/* Kitchen icon */}
            {isLogin ? 'Login' : 'Signup'}
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ bgcolor: '#f9fbe7' }}> {/* Light green background */}
          {!isLogin && (
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
            />
          )}
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleForm} sx={{ color: '#D32F2F' }}>
            {isLogin ? 'Create an account' : 'Already have an account?'}
          </Button>
          <Button 
            onClick={handleClose} 
            sx={{ color: '#D32F2F' }} // Red color for buttons
          >
            {isLogin ? 'Login' : 'Signup'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AuthModal;
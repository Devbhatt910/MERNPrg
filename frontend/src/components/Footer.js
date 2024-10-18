import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#f8f9fa', 
        py: 6, 
        borderTop: '1px solid #ddd', 
        mt: 6,
        color: 'text.primary'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>
          Kitchen Delights
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          Bird's High , Kudasan , Gandhinagar
        </Typography>
        
        {/* Social Media Icons */}
        <Grid container justifyContent="center" spacing={2} sx={{ mt: 2 }}>
          <Grid item>
            <IconButton color="inherit" aria-label="Facebook" href="#">
              <FacebookIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="inherit" aria-label="Twitter" href="#">
              <TwitterIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="inherit" aria-label="Instagram" href="#">
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>

        {/* Additional Links */}
        <Grid container justifyContent="center" spacing={2} sx={{ mt: 2 }}>
          <Grid item>
            <Typography variant="body2" align="center">
              <a href="#" style={{ textDecoration: 'none', color: '#007BFF' }}>Privacy Policy</a>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" align="center">
              <a href="#" style={{ textDecoration: 'none', color: '#007BFF' }}>Contact Us</a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;

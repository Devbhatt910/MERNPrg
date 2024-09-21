import React from 'react';
import Navbar from '../components/NavBar';
// import Footer from './Footer';
import foodBackground from '../images/3798534.jpg'; // Adjust the path based on your folder structure

function HomePage() {
  const styles = {
    backgroundImage: `url(${foodBackground})`,
    height: '100vh', // Full height of the viewport
    backgroundSize:'cover', // Cover the entire area
    backgroundPosition: 'center', // Center the image
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Space between navbar and footer
  };

  return (
    <div style={styles}>
      <Navbar />
      {/* Add your main content here */}
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
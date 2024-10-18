import React from 'react';
import Navbar from '../components/NavBar';
import Footer from './Footer';
import foodBackground from '../images/3798534.jpg'; 
// Adjust the path based on your folder structure
import '../css/app.css'
import CardSection from './CardSection';
import AuthModal from './AuthModal';
import Location from './locationSection'

function HomePage() {
  // const styles = {
  //   backgroundImage: `url(${foodBackground})`,
  //   height: '100vh', // Full height of the viewport
  //   backgroundSize:'cover', // Cover the entire area
  //   backgroundPosition: 'center', // Center the image
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'space-between', // Space between navbar and footer
  // };

  return (
    <div className='App'>
        <header className='navbar'>
        <div className="navbar-left">
        {/* <FontAwesomeIcon icon="fa-solid fa-kitchen-set" size="xl" /> */}
        </div>
        <div className="navbar-center">
          <h1 className="logo">Kitchen Delights</h1>
        </div>
        <div className="navbar-right">
          {/* <a href="#add-restaurant" className="nav-link">Add KItchnes</a> */}
          <AuthModal />
        </div>
        </header>
        <main className="hero-section">
        <h2 className="hero-title">Discover the best Home Based Foods in Gandhinagar</h2>
        <div className="search-bar">
          <select className="location-dropdown">
            <option>Gandhinagar</option>
            <option>Vavol</option>
            <option>Ahmedabad</option>
            <option>Ambaji</option>
            <option>Rajkot</option>
            <option>Mehsana</option>
            <option>Mansa</option>
            {/* Add more locations if needed */}
          </select>
          <input 
            type="text" 
            placeholder="Search for kitchen Name or a dish" 
            className="search-input"
          />
          <button className='search-button'>Search</button>
        </div>
      </main>
      
      <CardSection />
      <Location />
      <Footer />
    </div>
  );
}

export default HomePage;
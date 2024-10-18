import React from 'react';
import '../css/location.css'; // Import CSS file for styling

const localities = [
  { name: 'Bodakdev', places: 477 },
  { name: 'Navrangpura', places: 399 },
  { name: 'Vavol', places: 248 },
  { name: 'Mansa', places: 414 },
  { name: 'Gift City', places: 295 },
  { name: 'C G Road', places: 112 },
  { name: 'Saragasan', places: 124 },
  { name: 'Kudasan', places: 451 },
];

const locationSection = () => {
  return (
    <div className="localities-section">
      <h2>Popular localities in and around Gandhinagar And Ahmedabad</h2>
      <div className="localities-grid">
        {localities.map((locality, index) => (
          <div key={index} className="locality-card">
            <div className="locality-info">
              <h3>{locality.name}</h3>
              <p>{locality.places} places</p>
            </div>
            <div className="arrow"></div> {/* Right arrow */}
          </div>
        ))}
        <div className="locality-card see-more">
          <p>see more</p>
        </div>
      </div>
    </div>
  );
};

export default locationSection;

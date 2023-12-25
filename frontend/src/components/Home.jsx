import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home-page-main-container">
      <div className="home-page-container">
        <div className="home-page-links">
          <NavLink className='nav-link' to="/Dr. Manik Dalvi">Dr. Manik Dalvi</NavLink>
        </div>
        <div className="home-page-links">
          <NavLink className='nav-link' to="/Dr. Jane Doe">Dr. Jane Doe</NavLink>
        </div>
        <div className="home-page-links">
          <NavLink className='nav-link' to="/Dr. John Smith">Dr. John Smith</NavLink>
        </div>
        <div className="home-page-links">
          <NavLink className='nav-link' to="/Dr. Amanda Johnson">Dr. Amanda Johnson</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;

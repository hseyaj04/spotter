import React from "react";

import Logo from "../../assets/Logo.png";
import Name from "../../assets/spotter.png";
import ProceedArrow from "../../assets/right-arrow.png";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <img src={Logo} alt="Logo" className="logo" />
        <img src={Name} alt="Spotter" className="name" />
        <button className="proceed-button">
          <img src={ProceedArrow} alt="Proceed" className="arrow" />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
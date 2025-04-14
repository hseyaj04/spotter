import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Logo from "../../../assets/logo.png";
import Name from "../../../assets/spotter.png";

const LandingPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleProceed = () => {
        navigate("/login"); // Navigate to /login
    };

    return (
        <div className="bg-white h-screen w-screen flex flex-col justify-between items-center">
            {/* Centered Logo */}
            <div className="flex-grow flex justify-center items-center">
                <img src={Logo} alt="Logo" className="w-60 mt-20" />
            </div>

            {/* Proceed Button and Spotter Image */}
            <div className="flex flex-col items-center mb-10">
                <button
                    onClick={handleProceed} // Add onClick handler
                    className="bg-black rounded-full flex justify-center items-center mb-5 p-5 w-15 h-15"
                >
                    <i className="ri-arrow-right-line text-white text-3xl font-bold"></i>
                </button>
                <img src={Name} alt="Spotter" className="w-30" />
            </div>
        </div>
    );
};

export default LandingPage;
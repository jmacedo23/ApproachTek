import React from 'react';
import logo from './logo.png'; // Adjust the path as necessary
import './Logo.css'; // Correct the import path for the CSS file

interface LogoProps {
    width?: string;
    height?: string;
}

const Logo: React.FC<LogoProps> = ({ width = '400px', height = 'auto' }) => {
    return (
        <div className="logo-container">
            <img src={logo} alt="Logo" className="logo-image" style={{ width, height }} />
        </div>
    );
};

export default Logo;
import React from 'react';
import logo from '../../assets/logo.svg';

const Logo: React.FC = () => {


    return (
        <a
            href='/'
        >
            <img src={logo} alt="Logo" />
        </a>
    );
}

export default Logo;

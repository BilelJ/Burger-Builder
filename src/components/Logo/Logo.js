import React from 'react';
import Style from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props)=>(
    <div className={Style.Logo}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;
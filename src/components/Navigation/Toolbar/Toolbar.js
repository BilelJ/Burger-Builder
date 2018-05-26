import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Style from './Toolbar.css';
import Logo from '../../Logo/Logo';
const toolbar = (props) =>(
    <header className={Style.Toolbar}>
        <div onClick={props.openDrawer} className={Style.BurgerMenu}>☰</div>
        <div style={{"height":"80%"}}>
            <Logo />
        </div>
        <nav className={Style.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);
export default toolbar;
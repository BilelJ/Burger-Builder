import React from 'react';
import Logo from '../../Logo/Logo';
import Style from './SideDrawer.css'
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
const sideDrawer = (props)=>{
    let attachedClasses = [Style.SideDrawer, Style.Close];
    if (props.open){
        attachedClasses = [Style.SideDrawer, Style.Open];
    }
    return(
        <React.Fragment>
            <BackDrop show={props.open} hideBackdrop={props.closed}/>
            <div className={attachedClasses.join(' ')}>
            <div style={{"height":"11%"}}>
                <Logo />
            </div>            <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    );
};

export default sideDrawer;
import React from 'react';
import Style from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = ()=>(
    <ul className={Style.NavigationItems}>
        <NavigationItem link='/' active>BurgerBuilder</NavigationItem>
        <NavigationItem link='/orders'>Orders</NavigationItem>
    </ul>
)

export default navigationItems;
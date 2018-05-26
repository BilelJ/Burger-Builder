import React from 'react';
import Style from './NavigationItem.css';
import {NavLink} from 'react-router-dom';
const navigationItem = (props) =>(
    <li className={Style.NavigationItem}>
        <NavLink to={props.link} exact /*className={props.active?Style.active:null}*/activeClassName={Style.active}>{props.children}</NavLink>
    </li>
)
export default navigationItem;
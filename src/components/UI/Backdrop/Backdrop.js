import React from 'react';
import Style from './Backdrop.css';
const backdrop = (props)=>(
    props.show?<div className={Style.Backdrop} onClick={props.hideBackdrop}></div>:null
);

export default backdrop;
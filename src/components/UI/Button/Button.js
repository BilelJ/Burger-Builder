import React from 'react';
import Style from './Button.css';

const button = (props)=>(
    <button 
    disabled={props.disabled}
    onClick={props.clicked}
    className={[Style.Button,Style[props.btnType]].join(' ')}>
    {props.children}</button>
);


export default button;
import React from 'react';
import Style from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls =[
    { label:'Salad', type: 'salad'},
    { label:'Bacon', type: 'bacon'},
    { label:'Cheese', type: 'cheese'},
    { label:'Meat', type: 'meat'},
]
const buildControls = (props)=>(
    <div className={Style.BuildControls}>
        <p>Burger's Price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            add={()=>props.ingredientAdd(ctrl.type)}
            less={()=>props.ingredientRem(ctrl.type)}
            disabled={props.disabled[ctrl.type]}/>
        ))}
        <button disabled={!props.purchasable} className={Style.OrderButton} onClick={props.purchaseMode}>BUY NOW</button>
    </div>
);

export default buildControls;
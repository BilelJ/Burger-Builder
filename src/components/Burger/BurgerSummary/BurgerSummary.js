import React from 'react';
import Button from '../../UI/Button/Button';
const orderSummary =(props)=>{
   const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey=>{
            return (
            <li key={igKey}>
                <span style={{textTransfrom: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
            )
        });
    return(
       <React.Fragment>
           <h3>Your order</h3>
           <p>Ingredients</p>
           <ul>
                {ingredientSummary}
           </ul>
           <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
           <p>Continue to checkout?</p>
           <Button clicked={props.leavePurchase} btnType="Danger">Cancel</Button>
           <Button clicked={props.continuePurchase} btnType="Success">Checkout</Button>
        </React.Fragment>
   ) 
};

export default orderSummary;
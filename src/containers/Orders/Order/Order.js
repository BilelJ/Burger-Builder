import React from 'react';
import Style from './Order.css';
const order = (props)=>{
    const ingredients = []
    for (let ingredient in props.ingredients){
        ingredients.push(ingredient+':'+props.ingredients[ingredient])
    }
    return(<div className={Style.Order}>
        <p><strong>Ingredients:</strong> {ingredients.join(', ')}</p>
        <p><strong>Price: </strong>${props.price}</p>
    </div>)
};

export default order;
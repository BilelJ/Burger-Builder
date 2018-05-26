import React from 'react';
import Style from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) =>{
    let mountedIngredients = Object.keys(props.ingredients)
    .map(igKey => [...Array(parseInt(props.ingredients[igKey],10)) ] //This will create [],[],[]
        .map((_,i)=>{                                             //This will fill empty array with components and its props
        return <BurgerIngredient key={igKey+i} type={igKey} />
        })
    ).reduce((acc,cur)=>{
        return acc.concat(cur);
    },[]);
    if(mountedIngredients.length===0){
        mountedIngredients=<p>Please choose your ingredients</p>;
    }
    return(
        <div className={Style.Burger}>
            <BurgerIngredient type="bread-top"/>
                {mountedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;
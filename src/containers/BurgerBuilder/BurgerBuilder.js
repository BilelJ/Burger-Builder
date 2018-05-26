import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import BurgerSummary from '../../components/Burger/BurgerSummary/BurgerSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
const PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
};

class BurgerBuilder extends Component{
    state={
        ingredients:null,
        price: 4,
        purchasable: false,
        purchaseMode: false,
        loading: false,
        error: false
    }
componentDidMount(){
    axios.get('/ingredients.json')
        .then(response=>{
            this.setState({ingredients:response.data})
            this.updatePurchaseState();
        })
        .catch(error=>this.setState({error:true}));
}
updatePurchaseState(){
    const numberOfIngredients = Object.values({...this.state.ingredients})
    numberOfIngredients.some(number=>number>0)?
        this.setState({purchasable:true})
        :this.setState({purchasable:false});
}
handleMore = (type)=>{
    this.setState(prevState=>{
        prevState.ingredients[type]+=1;
        prevState.price += PRICES[type];
        return {ingredients : prevState.ingredients, price : prevState.price};
    },()=>this.updatePurchaseState())
}
handleLess = (type)=>{
    this.setState(prevState=>{
        if(prevState.ingredients[type]>0){
        prevState.ingredients[type]-=1;
        prevState.price -= PRICES[type];
        }
        return {ingredients : prevState.ingredients, price : prevState.price};
    },()=>this.updatePurchaseState())
}
purchaseMode = ()=>{
    this.setState({purchaseMode:true});
}
leavePurchaseMode = ()=>{
    this.setState({purchaseMode:false});
}
continuePurchaseMode = ()=>{
/*
*/
    const queryParams = [];
    for (let i in this.state.ingredients){
        queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]));
    }
    this.props.history.push({
        pathname:'/checkout',
        search: '?'+queryParams.join('&'),
        state:{price:this.state.price}
    });

}

    render(){
        const disabled = {...this.state.ingredients};
        for (let key in disabled){
            disabled[key] = disabled[key] <=0;
        }
        let burgerSummary = null;
        let burger = this.state.error?<p>Can't fetch ingredients from server</p>:<Spinner />;
        if (this.state.ingredients){
            burger = 
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdd={this.handleMore}
                    ingredientRem={this.handleLess}
                    disabled={disabled}
                    price={this.state.price}
                    purchasable={this.state.purchasable}
                    purchaseMode={this.purchaseMode}
                />
            </React.Fragment>;
            burgerSummary = <BurgerSummary 
            ingredients={this.state.ingredients}
            price={this.state.price}
            continuePurchase={this.continuePurchaseMode}
            leavePurchase={this.leavePurchaseMode} />;
        }
        
        if (this.state.loading){
            burgerSummary = <Spinner />
        }
        return(
            <React.Fragment>
                <Modal show={this.state.purchaseMode} leavePurchaseMode={this.leavePurchaseMode}>
                    {burgerSummary}
                </Modal>
                {burger}
            </React.Fragment>
        )
    }
}
export default withErrorHandler(BurgerBuilder,axios);
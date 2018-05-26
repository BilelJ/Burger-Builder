import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummar';
import queryString from 'query-string';
import {Route,withRouter} from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component{
    state = {
        ingredients:null,
        price:null
    }
componentWillMount = ()=>{
    if(this.props.location.state===undefined){
        this.props.history.push('/');
    } else {
    const queryIngredients = queryString.parse(this.props.location.search);
    for (let ingredient in queryIngredients){ //transfoms values from "2" String to 2 Integer
        queryIngredients[ingredient] = +queryIngredients[ingredient]
    }
    this.setState({ingredients: queryIngredients,price:this.props.location.state.price.toFixed(2)});
    }

}
checkoutContinue = ()=>{
    this.props.history.replace(this.props.match.url +'/contact-data');
}
checkoutCancelled = ()=>{
    this.props.history.goBack();
}
    render(){
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients?this.state.ingredients:{}} //if null, send an empty object
                    cancelCheckout={this.checkoutCancelled}
                    continueCheckout={this.checkoutContinue}
                    />
                <Route  path={this.props.match.url+'/contact-data'} 
                        render={(props)=><ContactData ingredients={this.state.ingredients} price={this.state.price} {...props}/>} 
                    />
            </div>
        )
    }
}

export default withRouter(Checkout);
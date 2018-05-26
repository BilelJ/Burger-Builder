import React,{Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Style from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
class ContactData extends Component{
    state ={
        orderForm:{
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                    },
                    value: '',
                    validation:{
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                street:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Address'
                    },
                    value: '',
                    validation:{
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                zipCode: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your zip code'
                    },
                    value: '',
                    validation:{
                        required: true,
                        minLength: 3,
                        maxLength: 5
                    },
                    valid: false,
                    touched: false
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your country'
                    },
                    value: '',
                    validation:{
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Your E-Mail'
                    },
                    value: '',
                    validation:{
                        required: true
                    },
                    valid: false,
                    touched: false
                },
               deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest',
                validation:{},
                valid: true,
                touched: false
            }
        },
        loading:false
    }
    orderHandler = (e) =>{
        e.preventDefault();
        this.setState({loading:true});
        const formData = {};
        for (let formElementId in this.state.orderForm){
            formData[formElementId] = this.state.orderForm[formElementId].value
        }
        const order ={
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        }
        axios.post('/orders.json',order)
        .then(response => {
            this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false});
            });
    }
    checkValidity(value,rules){
        let isValid = true;
        if (rules.required && isValid){
            isValid = value.trim() !== '';
        }
        if (rules.minLength && isValid){
            isValid = value.length >= rules.minLength;
        }
        if (rules.maxLength && isValid){
            isValid = value.length <= rules.maxLength;
        }
        return isValid;
    }
    changeInputHanlder = (e,id) =>{
        const updatedOrderForm = {...this.state.orderForm};
        const updatedOrderInput = {...updatedOrderForm[id]};
        updatedOrderInput.value = e.target.value;
        updatedOrderInput.valid = this.checkValidity(updatedOrderInput.value,updatedOrderInput.validation);
        updatedOrderInput.touched = true;
        updatedOrderForm[id] = updatedOrderInput;
        this.setState({orderForm:updatedOrderForm});
    }

    render(){
        const formElements = [];
        for (let key in this.state.orderForm){
            formElements.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        const canSubmit = formElements.every(formElement => formElement.config.valid===true);
        let form = (<form onSubmit={this.orderHandler}>
                    {formElements.map(element=>(
                        <Input 
                            changeInputValue ={(e)=>this.changeInputHanlder(e,element.id)} 
                            key={element.id} 
                            elementType={element.config.elementType} 
                            elementConfig={element.config.elementConfig}
                            needsValidation={element.config.validation}
                            isNotValid={!element.config.valid}
                            touched={element.config.touched}
                            value={element.config.value} 
                        />
                    ))}
                    <Button btnType='Success' disabled={!canSubmit}>Order</Button>
                </form>)
        if(this.state.loading){
            form=<Spinner />
        }
        return(
            <div className={Style.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;
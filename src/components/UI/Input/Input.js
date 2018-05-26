import React from 'react';
import Style from './Input.css';
const input = (props)=>{
    let inputElement = null;
    let inputClasses = [Style.InputElement];
    if (props.isNotValid && props.needsValidation && props.touched && props.elementType!=='select'){
        inputClasses.push(Style.Invalid);
    }
    switch(props.elementType){
        case('input'):
            inputElement = <input className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changeInputValue} />;
            break;
        case('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changeInputValue} />;
            break;
        case('select'):
            inputElement = <select  className={inputClasses.join(' ')}
                                    value={props.value}
                                    onChange={props.changeInputValue} >
                                {props.elementConfig.options.map(option=>(
                                    <option key={props.elementType+option.value} value={option.value}>{option.displayValue}</option>
                                ))}
                            </select>
                ;
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changeInputValue}/>;
    }
    return(
        <div className={Style.Input}>
            <label className={Style.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;
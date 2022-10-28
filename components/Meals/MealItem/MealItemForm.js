import { useRef, useState} from 'react';

import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';


const MealItemForm = (props) =>{
const [amountIsValid , setAmount] = useState(true)

const amountInputRef = useRef();

const submitHandler = (e) =>{
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5)
    {
        setAmount(false);
        return
    }
    props.onAddToCart(enteredAmountNumber);

}
    return(
        <form className={classes.form} onSubmit={submitHandler}>
        <Input  ref = {amountInputRef} label='Amount' input={{
            id:'amount_' + props.id,
            type:'number',
            min:1,
            max:5,
            defaultValue:1,
            step:1
        }}/>
        <button> + Add</button>
        {!amountIsValid && <p>Please enter a valid Amount</p>}
        </form>

       
    )
}

export default MealItemForm;

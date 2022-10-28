import React, {useContext , useState , useEffect} from 'react'

import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'



const HeaderCartButton = (props) =>{
    const [btnIsHighlighted , setbtnHighlighted] = useState(false);
const cartCtx = useContext(CartContext);
const numberOfCartItem = cartCtx.items.reduce( (currNum , item) =>{
    return currNum += item.amount;
} , 0)

const {items} = cartCtx

const btnClasses = `${classes.button} ${ btnIsHighlighted ? classes.bump : ''}`

useEffect(() => {

    if(items.length === 0)
    return;
    setbtnHighlighted(true)

    const timer = setTimeout(() =>{
        setbtnHighlighted(false)
    } , 100)

    return () =>{
        clearTimeout(timer)
    };
   
} , [items]);

const onClickHandler = () =>{
    props.changeShowcartVal()
}

    return <button onClick={onClickHandler} className={btnClasses}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span >Cart Item</span>
        <span className={classes.badge}>{numberOfCartItem}</span>
    </button>

}

export default HeaderCartButton;

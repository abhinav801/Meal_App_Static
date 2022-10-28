import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = (props) =>{
    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItem = cartCtx.items.length > 0 ? true : false;

    const cartItemRemoveHandler = (id) =>{
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler = (item) =>{
        cartCtx.addItem({...item , amount: 1})
    }

    const cartItem = <ul className={classes['cart-items']}>
        {cartCtx.items.map( (item) => 
        <CartItem key={item.id} 
        name={item.name} 
        amount={item.amount}
         price={item.price}
         onRemove={cartItemRemoveHandler.bind(null , item.id)}
         onAdd={cartItemAddHandler.bind(null , item)}
         />)}
        </ul>

    const onClickHandler = ()=>{
        props.onHidecart()
    }

    return(
        <Modal onHidecart = {props.onHidecart}> 
        {cartItem}
        <div className={classes.total}>
            <span>Total</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={onClickHandler}>Close</button>
            {hasItem && <button className={classes.button} onClick={onClickHandler}>Order</button>}
        </div>
        </Modal>
            
           
           
    )
}

export default Cart;

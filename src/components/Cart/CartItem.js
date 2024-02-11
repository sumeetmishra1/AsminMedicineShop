import classes from './CartItem.module.css'
const CartItem=(props)=>{
    const item=props.value
    return(
        <li className={classes}>
            <span className={classes.name}>{item.pName}</span>
            <span className={classes.price}>$ {item.pPrice}</span>
            <span className={classes.quantity}>Quantity- {item.pQuantity}</span>
        </li>
    )
}
export default CartItem
import { useContext, useState } from "react"
import Modal from "../../UI/Modal"
import ProductContext from "../../store/Product-context"
import classes from './Cart.module.css'
import CartItem from "./CartItem"
const Cart=(props)=>{
    const[isOrdererd,changeOrder]=useState(false)
    const productCtx=useContext(ProductContext)
    let totalAmount=0;
    const cartItem=productCtx.cartItem.map((item)=>{
        totalAmount+=item.pPrice
        return <CartItem value={item}/>
    })
    function orderItems(){
        productCtx.clearCart();
        changeOrder(true)
        setTimeout(()=>{
            changeOrder(false)
            props.closeCart()
        },3000)
    }
    return(
        <Modal closeCart={props.closeCart}>
            {isOrdererd && <h1>Ordered Succesfully!!</h1>}
            <ul>
            {cartItem}
            </ul>
            <h2>Total Amount-{totalAmount} </h2>
            <div className={classes.btn}>
            <button onClick={props.closeCart}>Close</button>
            <button onClick={orderItems}>Order Now!!</button>
            </div>
        </Modal>
    )
}
export default Cart
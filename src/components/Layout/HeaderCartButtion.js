import classes from './HeadCartButton.module.css'

const HeaderCartButton=(props)=>{
    return(
        <button className={classes.btn} onClick={props.showCart}>
            <span className={classes.name}>Your Cart</span>
            <span className={classes.quantity}>3</span>
        </button>
    )
}
export default HeaderCartButton;
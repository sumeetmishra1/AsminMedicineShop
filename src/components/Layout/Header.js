import HeaderCartButton from "./HeaderCartButtion";
import classes from './Header.module.css';
const Header =(props)=>{
    return(
        <div className={classes.header}>
            <h2>Cipla Store</h2>
            <HeaderCartButton showCart={props.showCart}/>
        </div>
    )

    
}
export default Header;
import { useContext } from "react";
import ProductContext from "../../store/Product-context";

const Medicine=(props)=>{
    const productCtx=useContext(ProductContext)
    const item=props.value
    function addToCart(){
        productCtx.addToCart(item)
    }
    return(
        <tr>
            <td>{item.pName}</td>
            <td>{item.pDesc}</td>
            <td>{item.pPrice}</td>
            <td>{item.pQuantity}</td>
            <td><button onClick={addToCart}>Add to Cart</button></td>
            
        </tr>
    )
}
export default Medicine;

import { useContext } from 'react';
import Medicine from './Medicine';
import classes from './MedicineList.module.css'
import ProductContext from '../../store/Product-context';
const MedicineList=(props)=>{
    const productCtx=useContext(ProductContext);
    const medicine=productCtx.products.map(item=>{
        return <Medicine key={Math.random()} value={item}/>
    })
    return(
        <table className={classes}>
            <thead>
                <tr>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
               {medicine}
            </tbody>
        </table>
    )
}
export default MedicineList;
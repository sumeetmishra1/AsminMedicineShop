import { useContext, useRef } from 'react';
import classes from './InputForm.module.css';
import ProductContext from '../../store/Product-context';
const InputForm=()=>{
    const nameRef=useRef()
    const descRef=useRef()
    const priceRef=useRef()
    const quantityRef=useRef()
    const ProductCtx=useContext(ProductContext)
    function formSubmit(event){
        event.preventDefault();
        let item={
            pName:nameRef.current.value,
            pDesc:descRef.current.value,
            pPrice:+priceRef.current.value,
            pQuantity:+quantityRef.current.value
        }
        ProductCtx.addToList(item)

        nameRef.current.value=''
        descRef.current.value=''
        priceRef.current.value=''
        quantityRef.current.value=''
    }
    return(
        <form onSubmit={formSubmit} className={classes}>
            <label>Product Name</label>
            <input type='text' id='productName' ref={nameRef} />
            <label>Product Description</label>
            <input type='text' id='productDescription' ref={descRef}/>
            <label htmlFor='productPrice'>Product Price</label>
            <input type='number' id='productPrice' ref={priceRef}/>
            <label>Quantity</label>
            <input type='number' id='productQunatity' ref={quantityRef}/>
            <button>Add</button>
        </form>
    )
}
export default InputForm
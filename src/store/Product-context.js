import React, { useState } from "react"
const ProductContext=React.createContext({
    products:[],
    cartItem:[],
    addToList:(item)=>{},
    addToCart:(item)=>{},
    clearCart:()=>{}
})
export const ProductProvider=(props)=>{
    const[productList,changeProduct]=useState([]);
    const[cartProduct,changeCart]=useState([]);
    function addItemToList(item){
        changeProduct([item,...productList])
    }
    function addItemToCart(item){
        changeCart([item,...cartProduct])
    }
    function clearCart(){
        changeCart([])
    }
    return(
        <ProductContext.Provider
         value=
         {{addToList:addItemToList,
         addToCart:addItemToCart,
         products:productList,
         cartItem:cartProduct,
         clearCart:clearCart
         }}>
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductContext;
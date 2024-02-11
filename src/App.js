import { useState } from "react";
import Card from "./UI/Card";
import InputForm from "./components/InputForm/InputForm";
import Header from "./components/Layout/Header";
import MedicineList from "./components/MedicineList/MedicineList";
import { ProductProvider } from "./store/Product-context";
import Cart from "./components/Cart/Cart";
function App() {
  const[IsCartShown,changeCartState]=useState(false)
  function showCart(){
    changeCartState(true)
  }
  function closeCart(){
    changeCartState(false)
  }
  return (
    <ProductProvider>
    <Card>
      {IsCartShown && <Cart closeCart={closeCart}/>}
      <Header showCart={showCart}/>
      <InputForm/>
      <MedicineList/>
      </Card>
      </ProductProvider>
  );
}

export default App;

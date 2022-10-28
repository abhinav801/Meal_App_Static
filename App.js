import React ,  {Fragment , useState} from "react";
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () =>{
const [showcart , setShowCart] = useState(false)


const onShowcart = () =>{

  setShowCart(true)
}
const onHidecart = () =>{

  setShowCart(false)
}


return<CartProvider>
   {showcart &&  <Cart onHidecart={onHidecart}/>}
   
   <Header changeShowcartVal={onShowcart}/>
   <main>
   <Meals/>
   </main>
</CartProvider>
 
}

export default App;

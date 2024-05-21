import Card from "./Components/card.jsx";
import getData from "./db/db.js";
import Cart from "./Components/cart.jsx";

import "./App.css";
import { useState,useEffect } from "react";
const foods = getData();

const tele = window.Telegram.WebApp;
function App() {
  const [cartItem, setCartItem] = useState([]);

  useEffect(()=>{
    tele.ready();
  },[])

  const addToCart = (food) => {
    const exist = cartItem.find((x) => x.id === food.id);
    if (exist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItem([...cartItem, { ...food, quantity: 1 }]);
    }
  };
  const removeFromCart = (food) => {
    const exist = cartItem.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItem(cartItem.filter((x) => x.id !== food.id));
    } else {
      setCartItem(
        cartItem.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  }; 
  const onCheckout =()=>{
    tele.MainButton.text = "Pay :)";
    tele.MainButton.show();
     
  }
  return (
    // <div className="bg-[#2c1a42]">
      <div className="  bg-[#26123f] p-10 text-white">
        <Cart cartItems={cartItem} onCheckout={onCheckout}/>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 m-auto  justify-center">
          {foods.map((food) => (
            <Card food={food} key={food.id} addItem={addToCart} removeItem={removeFromCart}/>
          ))}
        </div>
      </div>
    // </div>
  );
}

export default App;

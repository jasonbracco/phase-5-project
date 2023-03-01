import React, {useEffect, useState} from "react"
import {Route, Routes} from "react-router-dom"
import {UserContext} from "./UserContext"
import {CartContext} from "./CartContext"
import NavBar from "./NavBar"
import Homepage from "./Homepage"
import Profile from "./Profile"
import Shop from "./Shop"
import Orders from "./Pages/Orders"
import Cart from "./Cart"

function App() {

  const [user, setUser] = useState(null)
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  function updateCart(updatedCart){
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  // useEffect(() => {
  //   fetch ("/users").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => {
  //         console.log(user)
  //       })
  //     }
  //   })
  // })

  useEffect(() => {
    fetch ("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
        })
      }
    })
  }, [])



  return (
    <div>
      <div className="header">Header</div>
      <div>Cart</div>
      <div className="side-navbar">
        <UserContext.Provider value={{user, setUser}}>
          <CartContext.Provider value={{cart, updateCart}}>
            <NavBar/>
            <Routes>
              <Route path="/" element={<Homepage />}/>
              <Route exact path="/profile" element={<Profile />}/>
              <Route path="/shop" element={<Shop />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </CartContext.Provider>
        </UserContext.Provider >
      </div>
    </div>
  );
}

export default App;

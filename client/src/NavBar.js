import React, {useContext, useState} from "react";
import {Link} from "react-router-dom"
import {UserContext} from "./UserContext"
import {CartContext} from "./CartContext"

function NavBar(){

    const {setUser} = useContext(UserContext)
    const {cart, updateCart} = useContext(CartContext)
    
    const[loggedOut, setLoggedOut] = useState(true)

    const cartCount = cart.length


    function handleLogout(){ 
        fetch("/logout", {
            method: "DELETE"})
        .then((response) => {
            if (response.ok){
                updateCart([]);
                setUser(null);
                setLoggedOut(false)
            }
        })
    }

    return(
            <div className="Navbar">
                {loggedOut ? (
                    <div className="NavBar-options">
                        <Link to="/" className="nav-link">Homepage</Link>
                        <br></br>
                        <br></br>
                        <Link to="/profile" className="nav-link">Profile</Link>
                        <br></br>
                        <br></br>
                        <Link to="/shop" className="nav-link">Shop</Link>
                        <br></br>
                        <br></br>
                        <Link to="/sellers" className="nav-link">Photographers</Link>
                        <br></br>
                        <br></br>
                        <Link to="/orders" className="nav-link">Orders</Link>
                        <br></br>
                        <br></br>
                        <Link to="/cart" className="nav-link">Cart ({cartCount})</Link>
                        <br></br>
                        <br></br>
                        <Link to="/" onClick={handleLogout} className="nav-link">Logout</Link>
                    </div>
                ) : ( 
                    <div>
                        Logging Out - Seeya!
                    </div>
                )}
            </div>
    )
}

export default NavBar
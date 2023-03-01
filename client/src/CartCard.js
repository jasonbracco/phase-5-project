import React, {useContext} from "react"
import {CartContext} from "./CartContext"

function CartCard({item, uniqueItems}){

    const {cart, updateCart} = useContext(CartContext)
    console.log(cart)


    function handleRemoveAllFromCart(){
        console.log("Removed!");
        const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
        updateCart(newCart);
    }

    function addOneToCart(e){
        e.preventDefault();
        updateCart([...cart, item]);
    }


    function removeOneFromCart(e){
        e.preventDefault();
        uniqueItems.filter((uniqueItem) => {
            if (uniqueItem.id == item.id && uniqueItem.count > 1){
                const itemToDelete = cart.find(item => uniqueItem.id === item.id);
                const indexToRemove = cart.indexOf(itemToDelete);
                if (indexToRemove !== -1) {
                    const newCart = [...cart];
                    newCart.splice(indexToRemove, 1);
                    updateCart(newCart)
                }
            }
            else if (uniqueItem.id == item.id){
                const newCart = (cart.filter((item) => item.id !== uniqueItem.id))
                updateCart(newCart)
            }
        })
    }

    return(
        <div>
            <img className= "selling-pic" src={item.image} />
            <br></br>
            <button onClick={removeOneFromCart}>Minus</button>{item.count}<button onClick={addOneToCart}>Plus</button>
            <br></br>
            Name: {item.name}
            <br></br>
            Description: {item.description}
            <br></br>
            Price: ${item.price}
            <br></br>
            <button onClick={handleRemoveAllFromCart}>Remove All From Cart</button>
            <br></br>
            <br></br>
        </div>
    )
}

export default CartCard
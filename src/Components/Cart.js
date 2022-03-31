import React from 'react'
import { BsFillCartXFill } from "react-icons/bs";

function Cart() {
    return (
        <>
            <div className="cartImg">
                <BsFillCartXFill />
                <h2>Your cart is empty</h2>
                <p>Looks like you have not added anything to your cart.Go ahead and explore top categories</p>
                <div className="flexButton"><a href="/">Go to Home</a></div>
            </div>
        </>
    )
}

export default Cart
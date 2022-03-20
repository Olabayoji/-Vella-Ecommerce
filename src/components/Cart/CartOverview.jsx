import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItems from "../Cart/CartItems";
import Success from "../UI/Success";

function CartOverview(props) {
  const data = useSelector((state) => state.cart);

  let cartt = data.items.map((item) => (
    <ul key={item.id}>
      <CartItems
        title={item.title}
        qty={item.qty}
        price={item.price}
        image={item.image}
        id={item.id}
      />
    </ul>
  ));

  const show = data.checkedOut;
  // console.log(show);

  const empty = (
    <div className="text-center mt-4 font-semibold text-lg">
      <p>You do not have any item in your cart...</p>
    </div>
  );
  return (
    <>
      {show && <Success />}
      <div className="min-h-my_fit">
        <div className="">
          <h2 className="  ml-8 font-bold text-xl md:text-2xl lg:text-3xl ">
            Cart
          </h2>
          <hr />
        </div>
        {data.items.length === 0 ? empty : cartt}
        {data.items.length > 0 && (
          <div className="text-center w-full px-8 max-w-lg mx-auto">
            <p className="font-bold text-lg">Subtotal</p>
            <p className="font-black text-xl">${data.totalPrice.toFixed(2)}</p>
            <div className=" max-w-xl mx-auto mt-6">
              <Link
                to="/cart/checkout"
                className=" inline-block w-full px-4 py-2 bg-my-primary text-white rounded font-medium hover:bg-my-primary/[0.8] duration-300 "
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartOverview;

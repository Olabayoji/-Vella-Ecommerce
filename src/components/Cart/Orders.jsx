import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/CartSlice";
function Orders(props) {
  const dispatch = useDispatch();
  const removeProduct = (product) => {
    dispatch(cartActions.removeFromCart(product));
  };
  return (
    <div className="flex space-x-4">
      <div>
        <img src={props.image} alt={props.title} className="w-28" />
      </div>
      <div>
        <h2 className="text-xl font-bold">{props.title}</h2>
        <p className="text-sm flex items-center">
          <span className="">QTY</span>{" "}
          <span className="font-bold ml-2">{props.qty}</span>
        </p>
        <p className="text-my-primary font-bold">${props.price}</p>
      </div>
      <div
        onClick={() => removeProduct(props)}
        className=" hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
}

export default Orders;

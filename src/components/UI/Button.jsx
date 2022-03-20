import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/CartSlice";
function Button(props) {
  // console.log(props);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(cartActions.addToCart(product));
  };
  const removeProduct = (product) => {
    dispatch(cartActions.deleteFromCart(product));
  };
  return (
    <button
      onClick={() => {
        props.content === "+"
          ? addProduct(props.data)
          : removeProduct(props.data);
      }}
      className="font-black text-2xl border w-6 xs:w-10  text-my-primary py-1 r border-solid border-my-primary rounded hover:bg-my-primary/[0.7] hover:text-white duration-300"
    >
      {props.content}
    </button>
  );
}

export default Button;

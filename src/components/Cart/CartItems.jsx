import React from "react";
import Button from "../UI/Button";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/CartSlice";

const CartItems = (props) => {
  const dispatch = useDispatch();
  const removeProduct = (product) => {
    dispatch(cartActions.removeFromCart(product));
  };
  // console.log(props);
  return (
    <li className=" bg-my-primary/5 py-6 my-6  ">
      <div className=" w-full px-8 max-w-lg mx-auto  grid grid-cols-2  items-center">
        <img
          className=" h-36  object-contain "
          src={props.image}
          alt={props.title}
        />
        <div className=" mx-4  max-w-xl">
          <h2 className="text-lg font-base lg:text-2xl font-light  mt-4  ">
            {props.title}
          </h2>
          <div>
            <p className="font-semibold text-base md:text-xl">${props.price}</p>
          </div>
          <p className="flex items-center mt-4 col-span-2 ">
            <span className="text-black/50 font-semibold mr-2">QTY</span>
            <span className="font-semibold text-base  md:text-xl">
              {props.qty}
            </span>
          </p>
          <div className="mt-4 grid grid-cols-2 mb-4 ">
            <Button content="-" data={props} />
            <Button content="+" data={props} />
          </div>
          <button onClick={() => removeProduct(props)}>
            <MdDelete className="text-my-primary w-8 h-8" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItems;

import React, { useState } from "react";
import Orders from "./Orders";
import { useSelector } from "react-redux";

function OrderSummary() {
  const data = useSelector((state) => state.cart);
  const tax = Math.round((0.05 * data.totalPrice + Number.EPSILON) * 100) / 100;
  const subTotal = Math.round((data.totalPrice + Number.EPSILON) * 100) / 100;
  const total =
    Math.round(
      (parseFloat(tax) + parseFloat(subTotal) + Number.EPSILON) * 100
    ) / 100;

  return (
    <div className="flex md:ml-4 flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
      <div className="pt-12 md:pt-0 2xl:ps-4">
        <h2 className="text-xl font-bold">Order Summary</h2>
        <div className="mt-8">
          {data.items.map((item) => (
            <ul key={item.id}>
              <Orders
                title={item.title}
                qty={item.qty}
                price={item.price}
                image={item.image}
                id={item.id}
              />
            </ul>
          ))}
        </div>
        <div className="flex p-4 mt-4">
          <h2 className="text-xl font-bold">ITEMS {data.totalAmount}</h2>
        </div>
        <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
          Subtotal<span className="ml-2">${subTotal}</span>
        </div>
        <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
          Shipping Tax
          <span className="ml-2">${tax}</span>
        </div>
        <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
          Total<span className="ml-2 text-lg font-bold">${total}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;

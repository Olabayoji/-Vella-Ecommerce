import React from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";
import { getStars } from "../UI/Rating";
import { starRating } from "../UI/Rating";

function Product(props) {
  if (props === null) {
    return <LoadingSpinner />;
  }
  const rating = getStars(props.rating);
  // console.log(rating);
  const star = rating.map((rat, index) => {
    return starRating(rat, index);
  });

  return (
    <div className="max-w-300 w-full h-full flex flex-col justify-between ">
      <div>
        <img
          className=" h-48  w-full object-contain "
          src={props.img}
          alt={props.title}
        />
        <p className="self-start mt-2">{props.title}</p>
        <div className="flex self-start items-center justify-between">
          <p className="flex items-center">
            {star}({props.count})
          </p>
        </div>
        <p className="font-bold text-lg self-start  ">
          {" "}
          ${props.price.toFixed(2)}
        </p>
      </div>

      <Link
        to={`/products/${props.id}`}
        type="button"
        className="w-full text-center text-my-primary py-1 border border-solid border-my-primary rounded mt-6 hover:bg-my-primary/[0.7] hover:text-white duration-300"
      >
        Buy Now
      </Link>
    </div>
  );
}

export default Product;

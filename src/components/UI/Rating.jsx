import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

export function getStars(rating) {
  // Round to nearest half
  //   rating = Math.round(rating);
  let output = [];
  let i;
  // Append all the filled whole stars
  for (i = rating; i >= 0.8; i--) {
    output.push("<AiFillStar />");
  }

  // If there is a half a star, append it
  if (i > 0.3 && i < 0.8) {
    output.push("<FaStarHalfAlt />");
  }

  //   Fill the empty stars
  for (let i = 5 - rating; i >= 0.7; i--) {
    output.push("<AiOutlineStar />");
  }

  return output;
}

export function starRating(star, key) {
  if (star === "<AiFillStar />") {
    return <AiFillStar key={key} className="text-yellow-500" />;
  } else if (star === "<AiOutlineStar />") {
    return <AiOutlineStar key={key} />;
  } else {
    return <FaStarHalfAlt className="text-yellow-500" key={key} />;
  }
}

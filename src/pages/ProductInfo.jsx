import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getStars, starRating } from "../components/UI/Rating";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/CartSlice";
import Alert from "../components/UI/Alert";

function ProductInfo(props) {
  const dispatch = useDispatch();
  const addProduct = (product) => {
    // console.log(product);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 1500);
    dispatch(cartActions.addToCart(product));
  };
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  // Load product data
  useEffect(() => {
    let mounted = true;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        // cleanUP
        if (mounted) {
          setProduct(json);
          setLoading(false);
        }
      });
    return () => {
      mounted = false;
    };
  }, [id]);
  if (loading) {
    return (
      <div className="text-center">
        <LoadingSpinner />
      </div>
    );
  }
  const rating = getStars(product.rating.rate);
  // console.log(rating);
  const star = rating.map((rat, index) => {
    return starRating(rat, index);
  });

  return (
    <>
      {showAlert && <Alert />}
      <div className="  min-h-my_fit w-4/5 h-full mx-auto  grid grid-cols-1 lg:grid-cols-2  place-items-center gap-y-8 mt-12 ">
        <img
          className="max-h-80 object-contain  "
          src={product.image}
          alt={product.title}
        />
        <div className="max-w-lg  mx-auto">
          <p className=" uppercase font-semibold text:xl lg:text-3xl  text-black/50 ">
            {product.category}
          </p>
          <h2 className="text-2xl lg:text-5xl font-light  mt-4  ">
            {product.title}
          </h2>
          <p className="mt-2">{product.description}</p>
          <div className="">
            <span className="flex items-center">
              {star} ({product.rating.count})
            </span>
            <p className="font-bold text-lg lg:text-3xl">${product.price}</p>
          </div>
          <button
            onClick={() => addProduct(product)}
            className="text-white bg-my-primary font-bold rounded px-4 py-2 my-4 hover:bg-my-primary/70 duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductInfo;

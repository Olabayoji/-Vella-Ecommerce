import React, { useState } from "react";
import { Link } from "react-router-dom";
import headerImage from "../assets/main-image.jpeg";
import Benefits from "../components/Benefit/Benefits";
import Footer from "../components/Footer/Footer";
import Product from "../components/Products/Products";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

function Homepage() {
  const imageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${headerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    height: "calc(100vh - 80px)",
    maxHeight: "45em",
  };

  const [latest, setLatest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => {
        if (mounted) {
          setLatest(json);
          setLoading(false);
        }
      });
    return () => {
      mounted = false;
    };
  }, []);
  let latestProduct;
  // console.log(latest);
  if (loading) {
    latestProduct = (
      <div className="text-center">
        <LoadingSpinner />
      </div>
    );
  } else {
    latestProduct = (
      <div className=" w-4/5 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-8 place-items-end place-content-end ">
        {latest.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            img={product.image}
            title={product.title}
            rating={product.rating.rate}
            count={product.rating.count}
            price={product.price}
          />
        ))}
      </div>
    );
  }
  return (
    <div>
      <div style={imageStyle} className="py-6 flex flex-col justify-center ">
        <div className="w-4/5 mx-auto my-0 ">
          <div className="w-5/5  md:w-4/5 ">
            <p className="text-white text-4xl md:text-5xl lg:text-6xl font-black max-w-2xl w-full">
              Every purchase will be made with pleasure
            </p>
            <p className="text-white font-light mt-2 mb-9 ">
              Get the most amazing deals in one click.
            </p>
            <div>
              <Link
                className="px-10 py-3 text-white bg-black rounded hover:bg-black/[0.7] duration-300"
                to="products"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Benefits />
      <div>
        <div className="mt-12 w-4/5 text-my-primary mx-auto flex justify-between items-center">
          <p className="text-2xl font-bold">Latest Products</p>
          <Link
            to="products"
            className="flex items-center hover:text-my-primary/80 duration-300 hover:border-b-2 hover:border-my-primary hover:border-solid "
          >
            View More <AiOutlineArrowRight className="ml-2" />
          </Link>
        </div>
        <hr className="w-4/5 my-12 mx-auto text-black bg-black mt-4 " />
        {latestProduct}
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;

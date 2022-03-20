import React, { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Product from "../components/Products/Products";
import LoadingSpinner from "../components/UI/LoadingSpinner";

function ProductPage(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState(data);
  const [active, setActive] = useState("all");
  useEffect(() => {
    let mounted = true;
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        // cleanUP
        if (mounted) {
          setData(json);
          setFiltered(json);
          setLoading(false);
        }
      });
    return () => {
      mounted = false;
    };
  }, []);
  let latestProduct;

  // while fetching data
  if (loading) {
    latestProduct = (
      <div className="text-center">
        <LoadingSpinner />
      </div>
    );
  }
  // after fetching
  else {
    latestProduct = (
      <div className=" w-4/5 mx-auto grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8 place-items-end place-content-end ">
        {filtered.map((product) => (
          <Product
            key={product.title}
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

  // filter result
  const filterProduct = (category) => {
    if (category === "all") {
      setFiltered(data);
      setActive(category);
    } else {
      let result = data.filter((product) => product.category === category);
      setFiltered(result);
      setActive(category);
    }
  };
  return (
    <div>
      <div className=" min-h-screen">
        <div className="my-12 text-center ">
          <p className="text-2xl font-bold">Our Products</p>
          <hr className="w-4/5 mx-auto text-black bg-black my-4 " />

          <div className="w-4/5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 font-light mx-auto  self-center gap-y-5 ">
            <button
              onClick={() => filterProduct("all")}
              className={active === "all" ? "font-bold mx-3" : "mx-3"}
            >
              All
            </button>
            <button
              className={
                active === "men's clothing" ? "font-bold mx-3" : "mx-3"
              }
              onClick={() => filterProduct("men's clothing")}
            >
              Men's Clothing
            </button>
            <button
              className={
                active === "women's clothing" ? "font-bold mx-3" : "mx-3"
              }
              onClick={() => filterProduct("women's clothing")}
            >
              Women's Clothing
            </button>
            <button
              className={active === "jewelery" ? "font-bold mx-3" : "mx-3"}
              onClick={() => filterProduct("jewelery")}
            >
              Jewelry
            </button>
            <button
              className={active === "electronics" ? "font-bold mx-3" : "mx-3"}
              onClick={() => filterProduct("electronics")}
            >
              Electronics
            </button>
          </div>
        </div>
        {latestProduct}
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;

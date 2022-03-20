import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

function Footer() {
  const year = new Date().getFullYear();
  //   console.log(year);
  return (
    <footer className=" bg-my-primary text-white py-8 md:py-10 mt-32 ">
      <div className="w-4/5 m-auto flex flex-col md:flex-row  items-center justify-between">
        <p className="mb-4 md:mb-0">{`Ⓒ ${year} Vella Collection`}</p>
        <div className="flex">
          <Link to="/">
            <AiFillFacebook className="w-6 h-6 mx-1" />
          </Link>
          <Link to="/">
            <AiFillInstagram className="w-6 h-6 mx-q " />
          </Link>
          <Link to="/">
            <AiFillTwitterSquare className="w-6 h-6 mx-1" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { useState } from "react";
import { GiShoppingCart, GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

function Navbar() {
  const [showSidebar, setshowSidebar] = useState(false);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const openSidebarHandler = () => {
    setshowSidebar((prevState) => !prevState);
  };
  return (
    <nav className="drop-shadow-2xl">
      <div className="text-black max-w-7xl mx-auto flex justify-between items-center py-6 px-5 ">
        <div className="flex items-center">
          {/* Mobile Nav */}
          <button onClick={openSidebarHandler} className="mr-2 md:hidden">
            {showSidebar ? (
              <GrClose className="font-bold" />
            ) : (
              <GiHamburgerMenu />
            )}
          </button>
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-inherit flex items-center font-bold text-base md:text-2xl lg:text-3xl uppercase"
            >
              <img className="w-8 h-8 mr-2" src={Logo} alt="" />
              <span className="hidden md:inline-block">vella store</span>
            </Link>
          </div>
          {showSidebar && <Sidebar toggle={openSidebarHandler} />}
        </div>

        {/* Primary Nav */}
        <div className="text-inherit justify-between md:mr-40 space-x-8 hidden md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-b-4 border-b-my-primary hover:border-b-my-primary/[0.6] hover:text-black/[0.6] duration-300 "
                : "hover:border-b-4 hover:border-b-my-primary hover:text-black/[0.6] duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) =>
              isActive
                ? "border-b-4 border-b-my-primary hover:border-b-my-primary/[0.6] hover:text-black/[0.6] duration-300 "
                : "hover:border-b-4 hover:border-b-my-primary hover:text-black/[0.6] duration-300"
            }
          >
            Products
          </NavLink>
        </div>

        {/* Secondary Nav */}
        <div className="text-inherit flex items-center space-x-8 ">
          <Link
            to="cart"
            className="flex items-center hover:text-my-primary duration-300 "
          >
            <GiShoppingCart className="mr-1 w-6 h-6" />
            <span className="space-x-1 hidden lg:inline-block">Cart</span>
            <span>({totalAmount})</span>
          </Link>
          {/* <Link
            to="/"
            className="px-4 py-1 bg-my-primary text-white rounded font-medium hover:bg-my-primary/[0.8] duration-300 "
          >
            Login
          </Link> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

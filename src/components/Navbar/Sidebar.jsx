import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar(props) {
  return (
    <aside
      className="w-32 bg-white fixed items-center top-20 left-0 md:hidden flex flex-col"
      aria-label="Sidebar "
    >
      <NavLink
        onClick={props.toggle}
        className={({ isActive }) =>
          isActive
            ? "border-b-4 border-b-my-primary hover:border-b-my-primary/[0.6] hover:text-black/[0.6] duration-300 inline-block my-4"
            : " my-4 hover:border-b-4 hover:border-b-my-primary hover:text-black/[0.6] duration-300 "
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        onClick={props.toggle}
        to="products"
        className={({ isActive }) =>
          isActive
            ? "border-b-4 border-b-my-primary  my-4 hover:border-b-my-primary/[0.6] hover:text-black/[0.6] duration-300 inline-block"
            : " my-4 hover:border-b-4 hover:border-b-my-primary hover:text-black/[0.6] duration-300 inline-block"
        }
      >
        Products
      </NavLink>
    </aside>
  );
}

export default Sidebar;

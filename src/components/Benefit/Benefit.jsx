import React from "react";

function Benefit(props) {
  return (
    <div className="flex items-center md:justify-center w-full">
      {props.icon}
      <div className="ml-4">
        <p className="font-bold text-xl mb-2">{props.title}</p>
        <p className="text-black/80">{props.desc}</p>
      </div>
    </div>
  );
}

export default Benefit;

import React from "react";

const Button = ({ styles, name }) => (
  <button type="button" className={`font-poppins ${styles} text-white bg-gradient-to-br from-purple-700 via-purple-600 to-pink-700 hover:bg-gradient-to-tl transition-all duration-500  focus:outline-none font-semibold rounded-full text-lg px-9 py-4 text-center me-2 mb-2 active:scale-95 `}>
    {name}
  </button>
);

export default Button;

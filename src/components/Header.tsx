import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface Text {
  text: string;
}

export const Header: React.FC<Text> = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
};

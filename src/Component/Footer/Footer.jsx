import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <ul>
        <li>E-Mail</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Facebook</li>
      </ul>
      <h4>All Rights Reserved  &copy; {new Date().getFullYear()} </h4>
    </div>
  );
};

export default Footer;

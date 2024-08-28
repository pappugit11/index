import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <div id="templatemo_menu">
        <ul>
          <li>
            <Link to="/" className="current">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import "./Navbar.css";

const Navbar = ({ toggleModal }) => {
  return (
    <nav>
      <div className="nav__container">
        <figure>
          <i className="fa-solid fa-film logo__img">
            <span className="logo__name">OMDb Movie & Game Search</span>
          </i>
        </figure>
        <ul className="nav__list">
          <li className="nav__link">
            <a href="/">Home</a>
          </li>
          <li className="nav__link">
            <a href="/search">Search Titles</a>
          </li>
          <li
            className="nav__link nav__link--primary"
            onClick={() => {
              toggleModal();
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

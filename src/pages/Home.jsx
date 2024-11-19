import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import "./Home.css";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
    console.log("Modal State Changed:", !isModalOpen); // Debugging
  };

  return (
    <section id="landing">
      <Navbar toggleModal={toggleModal} />
      {isModalOpen && <Modal toggleModal={toggleModal} />}
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1 className="header__title">SEARCH FOR MOVIES OR GAMES</h1>
            <h2>
              Find all of the movies you desire with <br />
              <span className="text--blue">OMDb movie & game search</span>
            </h2>
            <div className="search__btns">
              <a href="/search">
                <button className="btn">Browse Titles</button>
              </a>
            </div>
          </div>
          <figure className="header__img--wrapper">
            <img
              src="assets/undraw_horror_movie_3988.svg"
              alt="Movies Illustration"
              className="header-img"
            />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Home;
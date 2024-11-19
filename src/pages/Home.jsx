import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import "./Home.css";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
    console.log("Modal State Changed:", !isModalOpen);
  };

  useEffect(() => {
    // Start the curtain fade-out
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 5000);

    // Show the content after the fade-out animation (2 seconds)
    const timer2 = setTimeout(() => {
      setShowContent(true);
    }, 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="home-container">
      <Navbar toggleModal={toggleModal} />
      {isModalOpen && <Modal toggleModal={toggleModal} />}

      {/* Curtain effect */}
      {!showContent && (
        <div className={`curtain-container ${fadeOut ? "fade-out" : ""}`}>
          <video
            className="curtain-video"
            src="/red_curtains.mp4" // Ensure this path is correct for your project
            autoPlay
            muted
            playsInline
            loop={false}
          />
        </div>
      )}

      {showContent && (
        <section id="landing">
          <div className="header__container">
            <div className="header__content">
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
                  src="/assets/undraw_horror_movie_3988.svg"
                  alt="Movies Illustration"
                  className="header-img"
                />
              </figure>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
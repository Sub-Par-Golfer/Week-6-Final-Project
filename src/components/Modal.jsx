import React from "react";
import "./Modal.css";

const Modal = ({ toggleModal }) => {
  return (
    <div className="modal__wrapper">
      <div className="modal__content">
        <button className="modal__close" onClick={toggleModal}>
          &times;
        </button>
        <h3>Contact Us</h3>
        <p>Please leave me a message if there are any modifications you'd like to see!</p>
        <form>
          <label>
            Name:
            <input type="text" name="user_name" required />
          </label>
          <label>
            Email:
            <input type="email" name="user_email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
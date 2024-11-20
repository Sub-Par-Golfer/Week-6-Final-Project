import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Modal.css";

const Modal = ({ toggleModal }) => {
  const [formData, setFormData] = useState({ user_name: "", user_email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_yzkv3wp",
        "template_uheqp5t",
        formData,
        "wciuI5vtvYyfew6j9"
      )
      .then(
        () => {
          setSuccessMessage(true);
          setFormData({ user_name: "", user_email: "", message: "" });
          setTimeout(() => {
            setSuccessMessage(false);
            toggleModal();
          }, 3000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal__exit" onClick={toggleModal}>
          &times;
        </button>
        <h3>Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <div className="form__item">
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form__item">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form__item">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="form__submit">
            Send
          </button>
        </form>
        {successMessage && (
          <div className="success-message">
            Email Successfully Sent!
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
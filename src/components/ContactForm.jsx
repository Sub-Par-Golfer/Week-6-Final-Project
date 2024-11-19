import React from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const loadingOverlay = document.querySelector('.modal__overlay--loading');
    const successOverlay = document.querySelector('.modal__overlay--success');
    loadingOverlay.classList.add('modal__overlay--visible');

    emailjs
      .sendForm(
        'service_yzkv3wp', // Replace with your EmailJS Service ID
        'template_uheqp5t', // Replace with your EmailJS Template ID
        event.target,
        'wciuI5vtvYyfew6j9' // Replace with your EmailJS Public Key
      )
      .then(() => {
        loadingOverlay.classList.remove('modal__overlay--visible');
        successOverlay.classList.add('modal__overlay--visible');
        console.log('Email sent successfully');
      })
      .catch((error) => {
        loadingOverlay.classList.remove('modal__overlay--visible');
        alert(
          'The email service is temporarily unavailable. Please contact us directly.'
        );
        console.error('Error sending email:', error);
      });
  };

  return (
    <form id="contact__form" onSubmit={handleSubmit}>
      <div className="form__item">
        <label>Name</label>
        <input className="input__contact" name="user_name" type="text" required />
      </div>
      <div className="form__item">
        <label>Email</label>
        <input
          className="input__contact"
          name="user_email"
          type="email"
          required
        />
      </div>
      <div className="form__item">
        <label>Message</label>
        <textarea className="input__contact" name="message" required></textarea>
      </div>
      <button className="form__submit" type="submit">
        Send
      </button>
      <div className="modal__overlay modal__overlay--loading">
        Sending...
      </div>
      <div className="modal__overlay modal__overlay--success">
        Thanks for the message!
      </div>
    </form>
  );
};

export default ContactForm;
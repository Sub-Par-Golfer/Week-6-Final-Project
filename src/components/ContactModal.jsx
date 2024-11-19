// src/components/ContactModal.js
import React from "react";

const ContactModal = ({ closeModal }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        closeModal();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="modal-close" onClick={closeModal}>
                    X
                </button>
                <form onSubmit={handleSubmit}>
                    <h2>Contact Us</h2>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea name="message" placeholder="Your Message" required />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
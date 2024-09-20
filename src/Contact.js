import React from 'react';
import './Contact.css'; // Optional: If you want to add specific styles for this component
import contactImage from '../src/assets/images/contact.png'; // Import the contact image

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-content">
        <img src={contactImage} alt="Contact Us" className="contact-image" />
        <div className="contact-text">
          <h2 className="animated-heading">Get in Touch with Us</h2>
          <p>
            At Ingrov Systems, we value your feedback and inquiries. Whether you have a question about our services, need assistance, or want to discuss a project, our team is here to help.
          </p>
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> info@ingrovsystems.com</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Tech Lane, Silicon Valley, CA, USA</p>

          <h3>Contact Form</h3>
          <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
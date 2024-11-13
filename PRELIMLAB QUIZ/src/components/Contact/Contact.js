import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>You can reach out via the form below, or contact me directly using the information provided.</p>
      <div className="contact-info">
        <p><strong>Phone:</strong> +63 912 345 6789</p>
        <p><strong>Email:</strong> angelica@example.com</p>
      </div>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="tel" placeholder="Your Contact Number" pattern="[0-9]{10,}" title="Please enter a valid contact number" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;

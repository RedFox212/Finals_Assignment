import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="contact-container">
      <h3>Get In Touch</h3>
      <p>Have a project in mind? Let's discuss how we can work together.</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required></textarea>
        <button type="submit">Submit Message</button>
      </form>
    </div>
  );
};

export default ContactForm;

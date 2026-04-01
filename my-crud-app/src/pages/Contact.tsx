import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;

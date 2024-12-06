import React from 'react';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-600">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
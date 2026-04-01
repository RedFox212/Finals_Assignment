import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import Modal from './Modal';

type ContactValues = {
  sender: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactValues | null>(null);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm<ContactValues>();

  const onSubmit: SubmitHandler<ContactValues> = (data) => {
    setSubmittedData(data);
    setIsModalOpen(true);
    reset(); // Clear the form after submission
  };

  return (
    <div className="contact-wrapper">
      <h3>Send a Message</h3>
      <p>Your inputs are managed with high-performance uncontrolled components.</p>
      
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Your Name (Sender)" 
            className={errors.sender ? 'error' : ''}
            {...register('sender', { 
              required: 'Sender Name is required',
              minLength: { value: 2, message: 'Name is too short' }
            })} 
          />
          {errors.sender && <span className="error-message">{errors.sender.message}</span>}
        </div>

        <div className="form-group">
          <textarea 
            placeholder="Your Message" 
            rows={5} 
            className={errors.message ? 'error' : ''}
            {...register('message', { 
              required: 'Message is required',
              minLength: { value: 10, message: 'Please write a longer message' }
            })}
          ></textarea>
          {errors.message && <span className="error-message">{errors.message.message}</span>}
        </div>

        <button type="submit" className="submit-btn">Send Securely</button>
      </form>

      {isModalOpen && submittedData && (
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          sender={submittedData.sender} 
          message={submittedData.message} 
        />
      )}
    </div>
  );
};

export default ContactForm;

import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  sender: string;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, sender, message }) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className={`modal-container theme-${theme}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-header">
          <span className="success-icon">✨</span>
          <h2>Message Received!</h2>
        </div>
        <div className="modal-body">
          <div className="sender-info">
            <label>From</label>
            <p>{sender}</p>
          </div>
          <div className="message-content">
            <label>Message</label>
            <p>{message}</p>
          </div>
        </div>
        <div className="modal-footer">
          <button className="close-btn" onClick={onClose}>Close Window</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

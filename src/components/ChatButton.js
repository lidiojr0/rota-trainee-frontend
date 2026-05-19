import React from 'react';
import './ChatButton.css';
import chatIcon from '../assets/chat.svg';

function ChatButton() {
  return (
    <button className="chat-floating-btn" aria-label="Abrir chat">
      <img src={chatIcon} alt="Chatbot" />
    </button>
  );
}

export default ChatButton;
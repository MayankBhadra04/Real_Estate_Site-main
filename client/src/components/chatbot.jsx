import React, { useEffect } from 'react';

const ChatbotIframeComponent = () => {
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.margin = '';
      document.body.style.height = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#FFAF45',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/g9N0cvZUmtzqfQlvB_788"
        style={{ 
          width: '60%', 
          height: '60%', 
          border: 'none', 
          borderRadius: '20px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
        }}
        frameBorder="0"
        title="Chatbot Iframe"
      ></iframe>
    </div>
  );
};

export default ChatbotIframeComponent;

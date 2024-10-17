import React, { useState } from 'react';
import { Bot, Send } from 'lucide-react';

const AiChatBot = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hello! I\'m your AI trading assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Add user message
    setMessages([...messages, { role: 'user', content: input }]);

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { role: 'bot', content: `I received your message: "${input}". How else can I assist you?` }
      ]);
    }, 1000);

    setInput('');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">AI Chat Bot</h1>
      <div className="bg-white p-6 rounded-lg shadow-md h-[600px] flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
            >
              <div
                className={`inline-block p-3 rounded-lg ${
                  message.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message here..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors duration-200"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiChatBot;
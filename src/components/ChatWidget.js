import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "This is a bot response." },
        ]);
      }, 1000);
    }
  };

  return (
    <div>
      {/* Chat Button */}
      <button
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-500 focus:outline-none"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle size={24} />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Chatbox */}
          <div className="w-full max-w-md bg-white rounded-xl shadow-xl relative overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-3 left-3 text-gray-500 hover:text-gray-800 focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="bg-blue-600 text-white text-center p-4 font-bold text-lg">
              Chat with Us
            </div>

            {/* Messages */}
            <div className="p-4 flex-1 overflow-y-auto max-h-80 space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`${
                    msg.sender === "user"
                      ? "bg-blue-100 text-blue-800 self-end"
                      : "bg-gray-100 text-gray-800 self-start"
                  } p-2 rounded-lg max-w-xs`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t flex items-center space-x-2">
              <input
                className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 focus:outline-none"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;

import React, { useState } from "react";
import ChatPopup from "./ChatPopup";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Tooltip wrapper */}
      <div className="fixed bottom-5 right-5 z-50 group flex flex-col items-center">
        {/* Tooltip */}
        <div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="relative bg-gray-200 text-gray-900 text-sm px-3 py-1 rounded shadow-md">
            Chat with AI
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-800"></div>
          </div>
        </div>

        {/* Button (unchanged position) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white bg-gradient-to-r from-purple-700 via-purple-600 to-pink-700 p-4 rounded-full shadow-lg transition-all text-2xl"
        >
          {isOpen ? <RxCross1 /> : <IoChatbubbleEllipsesSharp />}
        </button>
      </div>

      {isOpen && <ChatPopup onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default Chatbot;

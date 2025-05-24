import React, { useState } from "react";
import ChatPopup from "./ChatPopup";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5"
import { RxCross1 } from "react-icons/rx";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 text-white bg-gradient-to-r from-purple-700 via-purple-600 to-pink-700 p-4 rounded-full shadow-lg transition-all z-50 text-2xl"
      >
        {isOpen ? <RxCross1/> : <IoChatbubbleEllipsesSharp/>}
      </button>
      {isOpen && <ChatPopup onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default Chatbot;

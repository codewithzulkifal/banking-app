import React, { useState } from "react";
import axios from "axios";

const ChatPopup = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          contents: [{ parts: [{ text: input }] }],
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const botReply =
        res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (err) {
      console.error("Error:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-5 w-[340px] bg-white text-black rounded-xl shadow-xl z-50 flex flex-col">
      <div className="bg-gradient-to-r from-purple-700 to-pink-600 from text-white p-3 rounded-t-xl flex justify-between">
        <span>Gemini Chatbot</span>
        <button onClick={onClose}>✖</button>
      </div>
      <div className="p-3 h-[400px] overflow-y-auto space-y-2">
        {messages.map((msg, i) => (
        <div
        key={i}
        className={`max-w-[80%] p-3 rounded-xl text-sm break-words ${
        msg.sender === "user"
        ? "bg-purple-800 text-white self-end ml-auto"
        : "bg-gray-200 text-black self-start mr-auto"
        }`}
>
  {msg.text}
</div>

        ))}
        {loading && (
          <div className="text-sm text-gray-500 italic">Typing...</div>
        )}
      </div>
        <div className="flex items-center gap-2 p-2 border-t bg-white">
  <div className="flex items-center w-full px-3 py-2 bg-gray-100 rounded-full shadow-inner focus-within:ring-2 focus-within:ring-purple-500 transition-all duration-300">
    <input
      type="text"
      className="flex-grow bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      placeholder="Type your question..."
    />
  </div>
  <button
    onClick={sendMessage}
    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition-all duration-200"
  >
    ➤
  </button>
        </div>

    </div>
  );
};

export default ChatPopup;

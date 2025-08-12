import React from "react";

const messages = [
  { id: 1, fromMe: false, text: "Hey, naber?" },
  { id: 2, fromMe: true, text: "İyiyim, sen nasılsın?" },
  { id: 3, fromMe: false, text: "Fena değil, bugün ne yaptın?" },
  { id: 4, fromMe: true, text: "Çalıştım biraz, sen?" },
];

export default function InstaMessenger() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sol panel: kişi listesi */}
      <div className="w-72 border-r border-gray-300 bg-white flex flex-col">
        <div className="p-4 border-b border-gray-300 font-bold text-lg">
          Messages
        </div>
        <div className="flex-1 overflow-y-auto">
          {["Emir", "Selin", "Ahmet", "Zeynep"].map((name, i) => (
            <div
              key={i}
              className="p-3 cursor-pointer hover:bg-gray-100 border-b border-gray-200"
            >
              <div className="font-semibold">{name}</div>
              <div className="text-xs text-gray-500">Last message preview...</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sağ panel: sohbet */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b border-gray-300 p-4 font-semibold bg-white">
          Emir
        </div>

        {/* Mesajlar */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-100">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-xs p-2 rounded-lg ${
                msg.fromMe
                  ? "bg-blue-500 text-white self-end"
                  : "bg-white text-gray-800 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Mesaj yazma alanı */}
        <div className="border-t border-gray-300 p-4 bg-white flex items-center space-x-3">
          <input
            type="text"
            placeholder="Message..."
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-not-allowed opacity-50"
            disabled
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

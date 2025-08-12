import React from "react";

export default function InstaLogin() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex max-w-4xl w-full border border-gray-300 bg-white">
        {/* Sol tarafta görsel (isteğe bağlı) */}
        <div className="hidden md:flex flex-1 items-center justify-center bg-gray-100">
          <img
            src="https://i.imgur.com/zqpwkLQ.png"
            alt="Instagram Preview"
            className="max-h-[500px]"
          />
        </div>

        {/* Sağ tarafta login formu */}
        <div className="flex flex-col items-center justify-center w-full md:w-[350px] p-6">
          <h1 className="text-4xl font-bold mb-6 font-sans">Instagram</h1>
          <input
            type="text"
            placeholder="Phone number, username, or email"
            className="w-full p-2 border border-gray-300 rounded text-sm mb-2 bg-gray-50"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded text-sm mb-4 bg-gray-50"
          />
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded">
            Log In
          </button>

          <div className="flex items-center w-full my-4">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="px-4 text-gray-500 text-sm font-medium">OR</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          <a href="#" className="text-blue-900 text-sm font-medium">
            Log in with Facebook
          </a>

          <a href="#" className="text-xs text-blue-900 mt-4">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}

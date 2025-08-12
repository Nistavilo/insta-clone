import React from "react";

export default function InstaRegister() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex max-w-md w-full flex-col items-center border border-gray-300 bg-white p-8 rounded-md">
        <h1 className="text-4xl font-bold mb-6 font-sans">Instagram</h1>

        <input
          type="text"
          placeholder="Mobile Number or Email"
          className="w-full p-2 mb-3 border border-gray-300 rounded text-sm bg-gray-50"
        />
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 mb-3 border border-gray-300 rounded text-sm bg-gray-50"
        />
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-3 border border-gray-300 rounded text-sm bg-gray-50"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-6 border border-gray-300 rounded text-sm bg-gray-50"
        />

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded mb-4">
          Sign Up
        </button>

        <p className="text-xs text-gray-500 text-center px-6">
          By signing up, you agree to our{" "}
          <a href="#" className="text-blue-600 font-medium">
            Terms
          </a>{" "}
          &{" "}
          <a href="#" className="text-blue-600 font-medium">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}

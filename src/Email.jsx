import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Email = () => {
  return (
    // Main container for centering the form on the page with a light background
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-8">
      {/* The form container/box with modern styling */}
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Sign Up
        </h1>

        <form className="space-y-5">
          {" "}
          {/* Vertical spacing between form groups */}
          {/* Name Input Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name" // Important for form submission (even if static)
              placeholder="Your Full Name"
              required // HTML5 validation
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400 transition-colors duration-200"
            />
          </div>
          {/* Email Input Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400 transition-colors duration-200"
            />
          </div>
          {/* Phone Number Input Field */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number:
            </label>
            <input
              type="tel" // Use type="tel" for phone numbers
              id="phoneNumber"
              name="phoneNumber"
              placeholder="+998 XX YYY YY YY"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400 transition-colors duration-200"
            />
          </div>
          {/* Username Input Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Choose a username"
              required
              className="w-full px-4 py-2 border border-gray-30-0 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400 transition-colors duration-200"
            />
          </div>
          {/* Password Input Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400 transition-colors duration-200"
            />
          </div>
          {/* Send Button (acting as Sign Up) */}
          <button
            type="submit" // Will trigger HTML form submission (page reload)
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
          >
            Send (Sign Up)
          </button>
        </form>

        {/* Back to Main Button */}
        <div className="mt-6 text-center">
          <Link
            to="/" // Navigates to the main page
            className="inline-block px-6 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Back to Main
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Email;

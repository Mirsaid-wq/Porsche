import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ContactForm = () => {
  // Initialize the navigate function

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="bg-white p-6 sm:p-10 rounded-lg shadow-md w-full max-w-lg border border-gray-200">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
          Send your wantings
        </h1>
        <p className="text-center text-gray-600 mb-8">
          We'd love to hear from you. Please fill out the form below.
        </p>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              placeholder="e.g., +998 71 205 2 911"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 placeholder-gray-400 outline-none transition-all duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows="6"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 placeholder-gray-400 outline-none resize-y transition-all duration-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
          >
            Send Message
          </button>

          {/* This is the BACK button */}
          <button
            type="button"
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white mt-4" // Added margin-top for separation
          >
            <a href="/">Back to Main</a>
          </button>
        </form>

        <div className="text-center text-gray-500 mt-10 text-sm">
          <p>Or contact us directly:</p>
          <p className="mt-2 text-md font-semibold">Phone: +998 71 205 2 911</p>
          <p className="mt-1 text-md font-semibold">Email: mibum57@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

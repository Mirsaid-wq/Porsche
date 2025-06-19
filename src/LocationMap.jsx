// src/LocationMap.jsx
import React from "react";
import { Link } from "react-router-dom";

const LocationMap = () => {
  const embedMapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.49132103328!2d69.28283307621183!3d41.34863799650218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bd48e426615%3A0xc34b341f27464003!2sPorsche%20Center%20Tashkent!5e0!3m2!1sen!2suz!4v1718780517705!5m2!1sen!2suz";

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="bg-white p-6 sm:p-10 rounded-lg shadow-xl w-full max-w-4xl border border-gray-200 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
          It is our Location, come and enjoy with our cars!
        </h1>

        <div
          className="relative w-full rounded-lg overflow-hidden shadow-md mb-8"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            src={embedMapUrl}
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Porsche Center Tashkent Map"
          ></iframe>
        </div>

        <Link
          to="/"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
        >
          Back to Main
        </Link>
      </div>
    </div>
  );
};

export default LocationMap;

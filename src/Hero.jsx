// src/Hero.jsx
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BsFillTelephoneFill, BsFillGeoAltFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom"; // Keep Link for the phone number route

import img1 from "./assets/F9D62E45B045496DBC909B1A362B9DA1_4A3B5B18AE2F4CA799D84EF8EBBFCC30_CZ23V20OX0009-911-gt3-rs-driving-side.avif";
import img2 from "./assets/porsche-taycan-electric-uhd-4k-wallpaper.jpg";
import img3 from "./assets/1370550.jpeg";

const slides = [
  {
    image: img1,
    title: "Первый и единственный",
    subtitle: "Новый 911",
    description:
      "Испытайте эволюцию легенды. Новый уровень мощности и дизайна.",
  },
  {
    image: img2,
    title: "Мощь и стиль",
    subtitle: "Taycan",
    description: "Электрический спорткар будущего уже здесь.",
  },
  {
    image: img3,
    title: "Скорость и комфорт",
    subtitle: "Panamera",
    description: "Дизайн, комфорт и производительность в одном.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % slides.length);
  };

  const prev = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <section className="w-full h-screen relative overflow-hidden">
        <FaArrowLeft
          onClick={prev}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-3xl text-white cursor-pointer z-10"
        />
        <FaArrowRight
          onClick={next}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-3xl text-white cursor-pointer z-10"
        />

        <div
          className="bg-cover bg-center w-full h-full flex items-center transition-all duration-700 ease-in-out"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        >
          <div className="ml-[100px] bg-white/80 p-6 rounded-xl max-w-[600px]">
            <h1 className="text-[50px] font-bold text-black leading-tight">
              {slides[index].title}
            </h1>
            <h2 className="text-[36px] text-black mt-2">
              {slides[index].subtitle}
            </h2>
            <p className="mt-4 text-gray-700">{slides[index].description}</p>
          </div>
        </div>
      </section>

      <div className="sticky top-0 flex items-center justify-around py-8 bg-gray-800 text-white text-center h-[70px]">
        {/* Phone Number Link - navigates to /number */}
        <Link to="/number" className="flex items-center gap-2 hover:underline">
          <BsFillTelephoneFill className="text-[20px]" />
          <span className="text-[20px]">+998 71 205 2 911</span>
        </Link>

        {/* Location Link - NOW ALSO NAVIGATES TO /number */}
        <Link
          to="/location" // Changed this to /number as requested
          className="flex items-center gap-2 hover:underline"
        >
          <BsFillGeoAltFill className="text-[20px]" />
          <span className="text-[20px]">Локация</span>
        </Link>

        <Link
          to="/email" // Now points to /number
          className="flex items-center gap-2 hover:underline"
        >
          <MdOutlineEmail className="text-[20px]" />
          <span className="text-[20px]">mibum57@gmail.com</span>
        </Link>
      </div>
    </>
  );
};

export default Hero;

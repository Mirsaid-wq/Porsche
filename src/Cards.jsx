import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import img911 from "./Cars/911.jpg";
import taycan from "./Cars/Taycan.jpg";
import panamera from "./Cars/Panamera.jpg";
import Macan from "./Cars/Macan.jpg";
import cayenne from "./Cars/Cayenne.jpg";
import { useRef } from "react";

const PorscheCard = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto mb-6">
        <h1 className="text-2xl font-semibold">Соберите свой Porsche</h1>
        <div className="flex gap-4">
          <button onClick={() => scroll("left")}>
            <FaArrowLeft className="text-2xl hover:scale-110 transition" />
          </button>
          <button onClick={() => scroll("right")}>
            <FaArrowRight className="text-2xl hover:scale-110 transition" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar px-2"
      >
        {[
          { name: "911", img: img911 },
          { name: "Taycan", img: taycan },
          { name: "Panamera", img: panamera },
          { name: "Macan", img: Macan },
          { name: "Cayenne", img: cayenne },
        ].map((car, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex flex-col items-center justify-center w-[300px] h-[400px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              className="w-[270px] rounded-lg mb-4"
              src={car.img}
              alt={car.name}
            />
            <button className="border border-black px-6 py-2 rounded-full text-black font-medium hover:bg-black hover:text-white transition">
              {car.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PorscheCard;

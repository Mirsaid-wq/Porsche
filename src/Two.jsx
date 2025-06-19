import bg from "./assets/LSE_611_Lack_verdebritishracinggreen_Taycan_Static_Bg_alpha.png";
import bg2 from "./assets/4k-ultra-hd-porsche-gu578tvvoy6xxodd.jpg";
import { FaArrowRight } from "react-icons/fa";

const Two = () => {
  return (
    <section className="container mx-auto mt-[70px]">
      <h1 className="text-[40px] text-black font-semibold mb-8 text-left mt-10 ml-8">
        Новые автомобили & Автомобили с пробегом
      </h1>

      <div className="flex justify-center gap-6 flex-wrap mt-10">
        {/* Card 1 */}
        <div
          className="px-8 py-12 bg-cover bg-center w-[600px] h-[400px] rounded-2xl shadow-lg bg-white/80 flex flex-col justify-between items-start transition duration-300 transform hover:scale-105 hover:shadow-2xl"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <a href="#" className="w-full">
            <div className="flex items-center justify-between w-full mb-2">
              <h2 className="text-xl font-semibold text-white">
                Найти новый автомобиль
              </h2>
              <FaArrowRight className="text-white transition-transform group-hover:translate-x-1" />
            </div>
          </a>
          <p className="text-white">
            Ознакомьтесь с последними моделями Porsche. Лучшее из технологий и
            дизайна.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="px-8 py-12 bg-cover bg-center w-[600px] h-[400px] rounded-2xl shadow-lg bg-white/80 flex flex-col justify-between items-start transition duration-300 transform hover:scale-105 hover:shadow-2xl"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <a href="#" className="w-full">
            <div className="flex items-center justify-between w-full mb-2">
              <h2 className="text-xl font-semibold text-white">
                Автомобили с пробегом
              </h2>
              <FaArrowRight className="text-white transition-transform group-hover:translate-x-1" />
            </div>
          </a>
          <p className="text-white">
            Найдите идеальный автомобиль с гарантией от официального дилера.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Two;

import p718 from "./Model/718.jpg";
import p911 from "./Model/porsche-911-2025.jpg";
import taycan2 from "./Model/Taycan_home_Desktop.jpg";
import panamera2 from "./Model/new panamera cta.jpg";
import Macan2 from "./Model/macan.jpg";
import elect from "./Model/Macan electric.jpg";
import cayyene2 from "./Model/cayenneEhybrid.jpg";

const Cars = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-6 mb-4">Модели</h1>

      <section className="flex flex-wrap justify-center items-start gap-10 px-4">
        {/* 718 */}
        <div className="flex flex-col items-start justify-center h-[450px] gap-4">
          <img
            className="w-[320px] h-[220px] rounded-2xl object-cover"
            src={p718}
            alt="Porsche 718"
          />
          <h2 className="ml-[50px] text-black font-semibold text-3xl">718</h2>
          <h3 className="ml-[50px]">от 72,800.000,00 сумов</h3>
          <button className="ml-[50px] border-black border-2 rounded-lg py-3 px-6 hover:bg-gray-300 transition">
            <a href="#">Все модели</a>
          </button>
        </div>

        {/* 911 */}
        <div className="flex flex-col items-start justify-center h-[450px] gap-4">
          <img
            className="w-[320px] h-[220px] rounded-2xl object-cover"
            src={p911}
            alt="Porsche 911"
          />
          <h2 className="ml-[50px] text-black font-semibold text-3xl">911</h2>
          <h3 className="ml-[50px]">от 2.196.200.000,00 сумов</h3>
          <button className="ml-[50px] border-black border-2 rounded-lg py-3 px-6 hover:bg-gray-300 transition">
            <a href="#">Все модели</a>
          </button>
        </div>

        {/* Taycan */}
        <div className="flex flex-col items-start justify-center h-[450px] gap-4">
          <img
            className="w-[320px] h-[220px] rounded-2xl object-cover"
            src={taycan2}
            alt="Porsche Taycan"
          />
          <h2 className="ml-[50px] text-black font-semibold text-3xl">
            Taycan
          </h2>
          <h3 className="ml-[50px]">от 1.789.000.000,00 сумов</h3>
          <button className="ml-[50px] border-black border-2 rounded-lg py-3 px-6 hover:bg-gray-300 transition">
            <a href="#">Все модели</a>
          </button>
        </div>
        <div className="flex flex-col items-start justify-center h-[450px] gap-4">
          <img
            className="w-[320px] h-[220px] rounded-2xl object-cover"
            src={panamera2}
            alt="Panamera"
          />
          <h2 className="ml-[50px] text-black font-semibold text-3xl">
            Panamera
          </h2>
          <h3 className="ml-[50px]">от € 143 103.00*</h3>
          <button className="ml-[50px] border-black border-2 rounded-lg py-3 px-6 hover:bg-gray-300 transition">
            <a href="#">Все модели</a>
          </button>
        </div>
        <div className="flex flex-col items-start justify-center h-[450px] gap-4">
          <img
            className="w-[320px] h-[220px] rounded-2xl object-cover"
            src={Macan2}
            alt="Macan2"
          />
          <h2 className="ml-[50px] text-black font-semibold text-3xl">Macan</h2>
          <h3 className="ml-[50px]">от € 80 062.00*</h3>
          <button className="ml-[50px] border-black border-2 rounded-lg py-3 px-6 hover:bg-gray-300 transition">
            <a href="#">Все модели</a>
          </button>
        </div>
        <div className="flex flex-col items-start justify-center h-[450px] gap-4">
          <img
            className="w-[320px] h-[220px] rounded-2xl object-cover"
            src={elect}
            alt="Macan_e"
          />
          <h2 className="ml-[50px] text-black font-semibold text-3xl">Macan</h2>
          <h3 className="ml-[50px]">от 1.156.800.000,00 сумов</h3>
          <button className="ml-[50px] border-black border-2 rounded-lg py-3 px-6 hover:bg-gray-300 transition">
            <a href="#">Все модели</a>
          </button>
        </div>
        <div className="flex flex-col items-start justify-center h-[450px] gap-4">
          <img
            className="w-[320px] h-[220px] rounded-2xl object-cover"
            src={cayyene2}
            alt="cayyene"
          />
          <h2 className="ml-[50px] text-black font-semibold text-3xl">Macan</h2>
          <h3 className="ml-[50px]">от 1.680.900.000,00 cумов</h3>
          <button className="ml-[50px] border-black border-2 rounded-lg py-3 px-6 hover:bg-gray-300 transition">
            <a href="#">Все модели</a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Cars;

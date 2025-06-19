import React from "react";
import porscheBg from "./Model/HD-wallpaper-2019-porsche-911-gt3-rs-color-crayon-wheel-car.jpg"; // 👉 замени путь если нужно

const PorscheModal = () => {
  return (
    <div className="  bg-opacity-70 flex items-center justify-center z-50">
      <div
        className="bg-cover bg-center rounded-xl w-[900px] h-[450px] p-6 sm:p-10 text-white flex flex-col gap-4 items-start justify-end"
        style={{ backgroundImage: `url(${porscheBg})` }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold">Обработка данных</h2>
        <p className="text-sm sm:text-base max-w-[600px]">
          Наш сайт предоставляет контент о Google maps. Чтобы увидеть этот
          контент, Вам необходимо дать согласие на обработку данных Google maps.
        </p>

        <div className="flex gap-4 mt-4">
          <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition">
            Согласен
          </button>
          <button className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition">
            Настройки
          </button>
        </div>
      </div>
    </div>
  );
};

export default PorscheModal;

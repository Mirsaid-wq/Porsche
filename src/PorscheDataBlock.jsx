import bgImage from "./assets/porsche-bg.jpg"; // Помести сюда нужную картинку

const PorscheDataBlock = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      {/* Левая часть — с фоном */}
      <div
        className=" w-[900px] h-[450px] text-white flex flex-col justify-end bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="flex items-start justify-end gap-[00px]">
          <div className="flex-col flex  mb-[50px] ">
            <h2 className="text-2xl font-bold mb-2">Обработка данных</h2>
            <p className="mb-4 text-sm leading-tight w-[600px]">
              Наш сайт предоставляет контент с Google maps. Чтобы увидеть этот
              контент, Вам необходимо дать согласие на обработку данных Google
              maps
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200">
                <a href="#">Согласен</a>
              </button>

              <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
                <a href="#">Настройки</a>
              </button>
            </div>
          </div>
          <div className=" text-white flex-col  p-10 flex justify-between items-start text-sm">
            <p>📞 +998 71 205 2 911</p>
            <p>✉ Отправить email</p>
            <p>📍 Локация</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorscheDataBlock;

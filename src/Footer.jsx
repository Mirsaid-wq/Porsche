import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <section className="flex mt-[100px] items-center justify-center gap-10 h-[350px] bg-black">
        <div className="flex items-start justify-around gap-40">
          <div className="flex flex-col">
            <h1 className="text-3xl text-white font-semibold mb-[15px]">
              Адрес
            </h1>
            <h2 className="text-[20px] mb-[10px] text-white font-semibold">
              Porsche Студия Ташкент
            </h2>
            <div className="flex flex-col gap-4">
              <ul className="flex flex-col items-start">
                <li className="text-1xl text-white font-semibold">
                  г. Ташкент, 100021
                </li>
                <li className="text-1xl text-white font-semibold">
                  ул. Заргар 3/1
                </li>
                <li className="text-1xl text-white font-semibold">
                  Парк "Tashkent City"
                </li>
              </ul>
              <ul>
                <li className="text-1xl text-white font-semibold flex items-center gap-2 mb-2">
                  <AiOutlineGlobal />
                  <a href="#">info-uz@porsche-uzbekistan.uz</a>
                </li>
                <li className="text-1xl text-white font-semibold flex items-center gap-2 ">
                  <MdOutlineEmail />
                  <a href="#">На главную страницу</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl text-white font-semibold mb-[15px]">
              Связаться с нами
            </h1>
            <div className="flex flex-col gap-4">
              <ul className="flex flex-col items-start">
                <li className="text-1xl text-white font-semibold flex items-center gap-2 mb-2">
                  Шоурум <h1>tel:+998 71 205 2 911</h1>
                </li>
                <li className="text-1xl text-white font-semibold flex items-center gap-2 mb-2">
                  Сервис <h1>tel:+998 71 205 2 911</h1>
                </li>
                <li className="text-1xl text-white font-semibold flex items-center gap-2 mb-2">
                  Telegram <h1>Написать сообщение</h1>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl text-white font-semibold mb-[15px]">
              График работы
            </h1>
            <h2 className="text-[20px] mb-[10px] text-white font-semibold">
              Porsche Студия
            </h2>
            <div className="flex flex-col gap-4">
              <ul className="flex flex-col items-start">
                <li className="text-1xl text-white font-semibold">
                  Понедельник – Воскресенье 10:00 ‑ 20:00
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

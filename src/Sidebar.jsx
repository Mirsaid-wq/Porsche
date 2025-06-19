import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import menu from "./assets/Hamburger_icon.svg.png";
import { IoCloseSharp } from "react-icons/io5";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        {/* Burger menu with onClick */}
        <div
          className="flex items-center gap-2 cursor-pointer mt-[20px]"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img className="w-[40px]" src={menu} alt="menu" />
          <h2 className="text-black text-2xl font-medium">Меню</h2>
        </div>

        {/* Sidebar menu sliding from left */}
        <div
          className={`transition-transform duration-500 transform fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg p-4 z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close icon */}
          <div className="flex justify-end mb-2">
            <IoCloseSharp
              size={28}
              className="cursor-pointer hover:text-red-500 transition"
              onClick={() => setIsOpen(false)}
            />
          </div>

          <ul className="flex flex-col gap-4 mt-4 ml-[10px]">
            <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:bg-gray-100 transition duration-300">
              <a href="#" className="flex items-center gap-2">
                Модели <FaAngleRight />
              </a>
            </li>
            <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:bg-gray-100 transition duration-300">
              <a href="#" className="flex items-center gap-2">
                Конфигуратор <FaAngleRight />
              </a>
            </li>
            <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:bg-gray-100 transition duration-300">
              <a href="#" className="flex items-center gap-2">
                Найди свой порш <FaAngleRight />
              </a>
            </li>
            <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:bg-gray-100 transition duration-300">
              <a href="#" className="flex items-center gap-2">
                Сервис <FaAngleRight />
              </a>
            </li>
            <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:bg-gray-100 transition duration-300">
              <a href="#" className="flex items-center gap-2">
                Запасные части <FaAngleRight />
              </a>
            </li>
            <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:bg-gray-100 transition duration-300">
              <a href="#" className="flex items-center gap-2">
                E-Performance <FaAngleRight />
              </a>
            </li>
            <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:bg-gray-100 transition duration-300">
              <a href="#" className="flex items-center gap-2">
                О нас <FaAngleRight />
              </a>
            </li>
            <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:bg-gray-100 transition duration-300">
              <a href="#" className="flex items-center gap-2">
                Новости <FaAngleRight />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

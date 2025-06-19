import Sidebar from "./Sidebar";
import text from "./assets/857_porsche.jpg";
import { BsFillGeoAltFill } from "react-icons/bs";
import { Link } from "react-router-dom"; // Import Link for navigation

const Header = () => {
  return (
    <header className="h-[100px] items-center flex justify-between px-[30px]">
      <Sidebar />

      <div>
        <h1 className="text-[40px] font-semibold">Porsche</h1>
      </div>

      <Link
        to="/location" // Changed this to /number as requested
        className="flex items-center gap-2 hover:underline"
      >
        <BsFillGeoAltFill className="text-[25px]" />
        <span className="text-[27px] font-semibold">Студия Локация</span>
      </Link>
    </header>
  );
};

export default Header;

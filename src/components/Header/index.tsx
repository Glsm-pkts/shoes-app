import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white-fa p-4 2xl:p-8 rounded-xl lg:rounded-[24px] flex justify-between items-center text-gray-dark max-w-[1320px] mx-auto">
    <div className="flex gap-10 whitespace-nowrap max-lg:hidden">
      <Link to="/">New Drops 🔥</Link>
      <Link to="/">Men</Link>
      <Link to="/">Women</Link>
    </div>

    <button className="lg:hidden">
      <img src="/menu.svg" alt="" />
    </button>

    <Link to="/">
    <img src="/logo.svg" alt="" />
    </Link>

    <div className="flex gap-6 lg:gap-4">
      <button className="max-lg:hidden">
        <img src="/Search.svg" alt="" />
      </button>
      <button>
        <img src="/Vector.svg" alt="" />
      </button>
      <button className=" w-[25px] h-[25px] bg-yellow rounded-full font-semibold font-open grid place-items-center">
        <img src="0.svg" alt="" />
      </button>
    </div>
    </header>
  );
}

export default Header;

import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between">
      <Link to="/" className="font-bold text-2xl">
        datuchela
      </Link>
      <ul className="flex items-center gap-12">
        <li>
          <Link to="/about">about me</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <button className="px-6 py-3 rounded-lg bg-gray-700 text-white font-semibold hover:bg-black">
            contact
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;

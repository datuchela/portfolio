import { Link } from "@tanstack/react-router";
import projectList from "../assets/projectList";

const Header = () => {
  return (
    // <header className="w-full flex items-center justify-between">
    //   <Link to="/" className="font-bold text-2xl">
    //     datuchela
    //   </Link>
    //   <ul className="flex items-center gap-12">
    //     <li>
    //       <Link to="/about">about me</Link>
    //     </li>
    //     <li>
    //       <Link to="/projects">projects</Link>
    //     </li>
    //     <li>
    //       <button className="px-6 py-3 rounded-lg bg-gray-700 text-white font-semibold hover:bg-black">
    //         contact
    //       </button>
    //     </li>
    //   </ul>
    // </header>
    <HeaderInside />
  );
};

export default Header;

const HeaderInside = () => {
  return (
    <>
      <header className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">datuchela</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/projects">
                Projects
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2 bg-base-100">
                {projectList.map((project) => (
                  <li>
                    <Link to={`/${project.name}`}>{project.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

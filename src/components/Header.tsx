import { Link } from "@tanstack/react-router";
import projectList from "../assets/projectList";

const Header = () => {
  return <DaisyUIHeader />;
};

export default Header;

const DaisyUIHeader = () => {
  return (
    <>
      <header className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            datuchela
          </Link>
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
              <ul className="p-2 bg-base-200">
                {projectList.map((project) => (
                  <li key={project.id}>
                    <Link to={`/project/${project.name}`}>{project.name}</Link>
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

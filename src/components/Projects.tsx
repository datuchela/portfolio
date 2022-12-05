import { Link } from "@tanstack/react-router";
import projectList from "../assets/projectList";

const Projects = () => {
  return (
    <ul>
      {projectList.map((project) => (
        <li key={project.id}>
          <Link to={`/project/${project.name}`}>{project.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Projects;

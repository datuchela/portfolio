import { Link } from "@tanstack/react-router";
// import projectList from "../assets/projectList";

type Project = {
  id: number;
  node_id: string;
  full_name: string;
  name: string;
  html_url: string;
  owner: {
    login: string;
    id: number;
  };
};

type ProjectsProps = { data: Project[] };

const Projects = ({ data }: ProjectsProps) => {
  return (
    <ul>
      {data?.map((project) => (
        <li key={project.id}>
          <a target="_blank" href={project.html_url}>
            {project.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Projects;

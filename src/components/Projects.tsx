import projectList from "../assets/projectList";

const Projects = () => {
  return (
    <div>
      {projectList.map((project) => (
        <div>{project.name}</div>
      ))}
    </div>
  );
};

export default Projects;

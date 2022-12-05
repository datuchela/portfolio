import { useMatch } from "@tanstack/react-router";
import { singleProjectRoute } from "../../App";
import projectList from "../../assets/projectList";

export default function ProjectPage() {
  const { params } = useMatch(singleProjectRoute.id);
  const currentProject = projectList.filter((project) => project.name === params.projectName)[0];
  return <div>{currentProject.name}</div>;
}

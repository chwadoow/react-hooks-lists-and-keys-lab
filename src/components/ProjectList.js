import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // console.log(projects);
  const projectItems = projects.map((projo)=>(
    <ProjectItem 
      key={projo.id}
      name={projo.name}
      about={projo.about}
      technologies={projo.technologies}
    
    />

  ))





  return (
    <div id="projects">
      <h2>My Projects</h2>


      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;

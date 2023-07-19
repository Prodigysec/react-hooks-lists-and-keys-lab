import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologiesElement = technologies.map((technology,index) =>{
    return (
      <span key={index}>{technology}</span>
    )
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */
        technologiesElement}
      </div>
    </div>
  );
}

export default ProjectItem;

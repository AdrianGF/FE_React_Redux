import React from 'react';

const ProjectDetails = props => {
  const project = props.project;
  return (
    <div className="article-meta">
        <h1>{project.id} - {project.title}</h1>
        <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetails;

import React from 'react';

const ProjectDetails = props => {
  const project = props.project;
  return (
    <div className="article-meta">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p>{project.financed}</p>
        <small>{project.pub_date}</small>
    </div>
  );
};

export default ProjectDetails;

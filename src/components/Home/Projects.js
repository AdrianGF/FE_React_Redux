import React from 'react';

const Projects = props => {
    const projects = props.projects;
  if (projects) {
    return (
      <div className="tag-list">
        {
          projects.map(project => {

            return (
              <a
                href=""
                className="tag-default tag-pill"
                key={project.title}>
                {project.title}
              </a>
            );
          })
        }
      </div>
    );
  } else {
    return (
      <div>Loading Projects...</div>
    );
  }
};

export default Projects;

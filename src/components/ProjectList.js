import ProjectPreview from './ProjectPreview';
// import ListPagination from './ListPagination';
import React from 'react';

const ProjectList = props => {
  if (!props.projects) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.projects.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.projects.map(project => {
          return (
            <div>
              <ProjectPreview  project={project} key={project.slug} />
            </div>
          );
        })
      }
    </div>
  );
};

export default ProjectList;

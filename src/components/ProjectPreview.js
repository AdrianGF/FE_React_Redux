import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProgressBar from './ProgressBar';



const ProjectPreview = props => {
  const project = props.project;

  return (
    <div className="article-preview">
      <div className="article-meta">
        <div className="info">
          <span className="date">
            {new Date(project.pub_date).toDateString()}
          </span>
        </div>
      </div>

      <Link to={`/projects/${project.slug}`} className="preview-link">
        <h1>{project.title}</h1>
        <ProgressBar financed={project.financed}></ProgressBar>
        <p>{project.description}</p>
        <small>{project.pub_date}</small>
      </Link>
    </div>
  );
}

export default connect(() => ({}))(ProjectPreview);

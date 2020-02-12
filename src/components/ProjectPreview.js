import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProgressBar from './ProgressBar';
import agent from '../agent';
import { PROJECT_FAVORITED, PROJECT_UNFAVORITED } from '../constants/actionTypes';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

const mapDispatchToProps = dispatch => ({
  favorite: slug => dispatch({
    type: PROJECT_FAVORITED,
    payload: agent.Projects.favorite(slug)
  }),
  unfavorite: slug => dispatch({
    type: PROJECT_UNFAVORITED,
    payload: agent.Projects.unfavorite(slug)
  })
});


const ProjectPreview = props => {
  const project = props.project;

  const favoriteButtonClass = project.favorited ?
    FAVORITED_CLASS :
    NOT_FAVORITED_CLASS;

  const handleClick = ev => {
    ev.preventDefault();
    if (project.favorited) {
      props.unfavorite(project.slug);
    } else {
      props.favorite(project.slug);
    }
  };

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
        <br></br>
      </Link>
      <button className={favoriteButtonClass} onClick={handleClick}>
        <i className="ion-heart"></i>
      </button>

    </div>
  );
}

export default connect(() => ({}), mapDispatchToProps)(ProjectPreview);

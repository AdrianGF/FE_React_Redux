import React from 'react';
import { Link } from 'react-router-dom';
// import agent from '../agent';
import { connect } from 'react-redux';
// import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../constants/actionTypes';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

// const mapDispatchToProps = dispatch => ({
//   favorite: slug => dispatch({
//     type: ARTICLE_FAVORITED,
//     payload: agent.Articles.favorite(slug)
//   }),
//   unfavorite: slug => dispatch({
//     type: ARTICLE_UNFAVORITED,
//     payload: agent.Articles.unfavorite(slug)
//   })
// });

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

        <div className="pull-xs-right">
          {/* <button className={favoriteButtonClass} onClick={handleClick}>
            <i className="ion-heart"></i> {article.favoritesCount}
          </button> */}
        </div>
      </div>

      <Link to={`/projects/${project.id}`} className="preview-link">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <span>Read more...</span>
      </Link>
    </div>
  );
}

export default connect(() => ({}))(ProjectPreview);

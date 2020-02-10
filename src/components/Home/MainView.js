import ProjectList from '../ProjectList';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ...state.projectList
});

const MainView = props => {
  return (
    <div className="col-md-9">
      <ProjectList
        projects={props.projects}/>
    </div>
  );
};

export default connect(mapStateToProps)(MainView);

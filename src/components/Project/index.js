import ProjectDetails from './ProjectDetails';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { PROJECTS_DETAILS, HOME_PAGE_UNLOADED } from '../../constants/actionTypes';

const mapStateToProps = state => ({
  project: state.projectList.project
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: PROJECTS_DETAILS, payload }),
  onUnload: () =>
    dispatch({ type: HOME_PAGE_UNLOADED })
});

class Project extends React.Component {
  componentWillMount() {
    this.props.onLoad(Promise.all([agent.Projects.get(this.props.match.params.id)]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    if (!this.props.project) {
      return null;
    }
    return (
      <div className="article-page">
        <h1>Details</h1>
        <ProjectDetails project={this.props.project}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);

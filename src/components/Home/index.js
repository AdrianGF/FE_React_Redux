import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
// import Tags from './Tags';
// import Projects from './Projects';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
  PROJECTS_LIST_LOADED
} from '../../constants/actionTypes';

const Promise = global.Promise;

const mapStateToProps = state => ({
  appName: state.common.appName,
  token: state.common.token,
});

const mapDispatchToProps = dispatch => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (payload) =>
    dispatch({ type:PROJECTS_LIST_LOADED, payload }),
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.onLoad(Promise.all([agent.Projects.getAll()]));
  }

  UNSAFE_componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="home-page">

        <Banner token={this.props.token} appName={this.props.appName} />

        <div className="container page">
          <div className="row">
            <MainView />
          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

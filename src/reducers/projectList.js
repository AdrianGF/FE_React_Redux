import {
  PROJECTS_LIST_LOADED,
  PROJECTS_DETAILS,
  PROJECT_FAVORITED,
  PROJECT_UNFAVORITED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case PROJECT_FAVORITED:
    case PROJECT_UNFAVORITED:
      return {
        ...state,
        projects: state.projects.map(project => {
          if (project.slug === action.payload.project.slug) {
            return {
              ...project,
              favorited: action.payload.project.favorited,
            };
          }
          return project;
        })
      };
    case PROJECTS_LIST_LOADED:
      return {
        ...state,
        projects: action.payload[0].results
      };

    case PROJECTS_DETAILS:
      return {
        ...state,
        project: action.payload[0]
      };
    default:
      return state;
  }
};

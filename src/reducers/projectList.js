import {
  PROJECTS_LIST_LOADED,
  PROJECTS_DETAILS,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
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

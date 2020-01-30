import {
  HOME_PAGE_LOADED,
  PROJECTS_DETAILS,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        projects: action.payload[0],
      };

    case PROJECTS_DETAILS:
      return {
        ...state,
        project: action.payload[0],
      };
    default:
      return state;
  }
};

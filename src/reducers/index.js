import { combineReducers } from 'redux';
import {
  TOGGLE_COLLAPSED, 
  REDDIT_FETCH_BEGIN, REDDIT_FETCH_SUCCESS, REDDIT_FETCH_FAILURE
} from '../actions';

const collapsed = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_COLLAPSED:
      return !state;
    default:
      return state;
  }
}

const reddit = (
  state = {
    isFetching: false,
    posts: null
  },
  action
) => {
  switch (action.type) {
    case REDDIT_FETCH_BEGIN:
      return {
        ...state,
        isFetching: true
      };
    case REDDIT_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.posts
      }
    case REDDIT_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  collapsed, reddit
})

export default rootReducer
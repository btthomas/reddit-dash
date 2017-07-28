import { REDDIT_FETCH_BEGIN, REDDIT_FETCH_SUCCESS, REDDIT_FETCH_FAILURE } from '../actions';

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

export default reddit;
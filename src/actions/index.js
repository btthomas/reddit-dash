export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED';

export const toggleCollapsed = () => ({
  type: TOGGLE_COLLAPSED
});

export const REDDIT_FETCH_BEGIN = 'REDDIT_FETCH_BEGIN';
export const REDDIT_FETCH_SUCCESS = 'REDDIT_FETCH_SUCCESS';
export const REDDIT_FETCH_FAILURE = 'REDDIT_FETCH_FAILURE';

export const redditFetchBegin = () => {
  return {
    type: REDDIT_FETCH_BEGIN
  };
}

export const redditFetchSuccess = (json) => {
  return {
    type: REDDIT_FETCH_SUCCESS,
    posts: json.data.children.map(child => child.data)
  };
}

export const redditFetchFailure = (error) => {
  return {
    type: REDDIT_FETCH_FAILURE,
    error
  };
}

export function fetchReddit() {
  return function (dispatch) {
    dispatch(redditFetchBegin());
    return fetch('https://www.reddit.com/.json')
      .then(
        res => res.json(),
        err => {
          console.log('An error occured in fetchReddit', err);
          dispatch(redditFetchFailure(err));
        }
      )
      .then(json => dispatch(redditFetchSuccess(json)));
  }
}
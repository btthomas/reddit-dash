import { TOGGLE_COLLAPSED } from '../actions';

const collapsed = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_COLLAPSED:
      return !state;
    default:
      return state;
  }
}

export default collapsed;
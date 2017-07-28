import { combineReducers } from 'redux';
import {
  TOGGLE_COLLAPSED, 
} from '../actions';

const collapsed = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_COLLAPSED:
      return !state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  collapsed
})

export default rootReducer
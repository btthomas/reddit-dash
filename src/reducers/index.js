import { combineReducers } from 'redux';
import reddit from './reddit.js';
import collapsed from './collapsed.js';

const rootReducer = combineReducers({
  collapsed, reddit
})

export default rootReducer
import { combineReducers } from 'redux';
import conversations from './reducers/conversations';
import fetching from './reducers/fetching';
import user from './reducers/user'

export default combineReducers({
  conversations,
  fetching,
  user
});
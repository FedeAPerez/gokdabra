import { combineReducers } from 'redux';
import conversations from './reducers/conversations';
import fetching from './reducers/fetching';
import user from './reducers/user';
import visitedUser from './reducers/visitedUser';

export default combineReducers({
  conversations,
  fetching,
  user,
  visitedUser
});
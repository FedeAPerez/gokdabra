import { combineReducers } from 'redux';
import business from './reducers/business';
import conversations from './reducers/conversations';
import fetching from './reducers/fetching';
import user from './reducers/user'

export default combineReducers({
  business,
  conversations,
  fetching,
  user
});
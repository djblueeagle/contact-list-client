import { combineReducers } from 'redux';

export default combineReducers({
  contact: require('./contact').reducer,
  filter: require('./filter').reducer,
});

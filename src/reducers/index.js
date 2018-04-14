import {combineReducers} from 'redux';
import contact from './contact';
import filter from './filter';

export default combineReducers({
    contact,
    filter
})
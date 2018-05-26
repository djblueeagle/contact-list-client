import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  changeKeyword: ['keyword'],
});

export const FilterTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable('');

export const changeFilterState = (state = INITIAL_STATE, action) => {
  return action.keyword;
};

export const HANDLERS = {
  [Types.CHANGE_KEYWORD]: changeFilterState,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);

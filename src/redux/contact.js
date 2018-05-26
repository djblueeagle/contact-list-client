import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  addUser: ['name', 'email'],
});

export const ContactTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable([
  { name: 'Dhivya', email: 'raj.dhivya@gmail.com' },
  { name: 'DP', email: 'hsdpal@gmail.com' },
  { name: 'Neel', email: 'vascodagama1@gmail.com' },
  { name: 'Cheetan', email: 'mail@chetankothari.in' },
  { name: 'Dewa', email: 'awidiya.dewa@gmail.com' },
  { name: 'Kim', email: 'mail@gmail.com' },
  { name: 'Other Kim', email: 'mail@gmail.com' },
  { name: 'Another Kim', email: 'mail@gmail.com' },
  { name: 'Friend of Kim', email: 'mail@gmail.com' },
  { name: 'Mother of Kim', email: 'mail@gmail.com' },
  { name: 'Father of Kim', email: 'mail@gmail.com' },
]);

export const addUser = (state = INITIAL_STATE, action) => {
  const { name, email } = action;
  return [{ name, email }, ...state];
};

export const HANDLERS = {
  [Types.ADD_USER]: addUser,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);

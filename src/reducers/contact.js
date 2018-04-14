const ADD_USER = 'ADD_CONTACT';

const INITIAL_DATA = [
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
];

export default function(state = INITIAL_DATA, action) {
  switch(action.type) {
    case ADD_USER:
      const { name, email } = action.payload;
      return [{ name, email }, ...state];
    default :
      return state;
  }
}

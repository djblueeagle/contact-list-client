import Immutable from 'seamless-immutable';
import contactActions, { addUser, ContactTypes, HANDLERS } from '../src/redux/contact';

describe('reducer', () => {
  let INITIAL_STATE;
  beforeEach(() => {
    INITIAL_STATE = Immutable([
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
  });
  describe('contact', () => {
    xit('should return the initial state', () => {
      const expectedResult =
        [
          { 'email': 'raj.dhivya@gmail.com', 'name': 'Dhivya' },
          { 'email': 'hsdpal@gmail.com', 'name': 'DP' },
          { 'email': 'vascodagama1@gmail.com', 'name': 'Neel' },
          { 'email': 'mail@chetankothari.in', 'name': 'Cheetan' },
          { 'email': 'awidiya.dewa@gmail.com', 'name': 'Dewa' },
          { 'email': 'mail@gmail.com', 'name': 'Kim' },
          { 'email': 'mail@gmail.com', 'name': 'Other Kim' },
          { 'email': 'mail@gmail.com', 'name': 'Another Kim' },
          { 'email': 'mail@gmail.com', 'name': 'Friend of Kim' },
          { 'email': 'mail@gmail.com', 'name': 'Mother of Kim' },
          { 'email': 'mail@gmail.com', 'name': 'Father of Kim' }];
      expect(reducer(undefined, {})).toEqual(expectedResult);
    });

    it('should add banu with ADD_USER action', () => {
      const expectedResult = [{ 'email': 'banu@gmail.com', 'name': 'banu' }];
      expect(addUser([], {
        type: ContactTypes.ADD_USER,
        email: 'banu@gmail.com',
        name: 'banu',
      })).toEqual(expectedResult);
    });

    it('should add joni with ADD_USER action', () => {
      const expectedResult =
        [
          { 'email': 'joni@gmail.com', 'name': 'joni' },
          { 'email': 'raj.dhivya@gmail.com', 'name': 'Dhivya' },
          { 'email': 'hsdpal@gmail.com', 'name': 'DP' },
          { 'email': 'vascodagama1@gmail.com', 'name': 'Neel' },
          { 'email': 'mail@chetankothari.in', 'name': 'Cheetan' },
          { 'email': 'awidiya.dewa@gmail.com', 'name': 'Dewa' },
          { 'email': 'mail@gmail.com', 'name': 'Kim' },
          { 'email': 'mail@gmail.com', 'name': 'Other Kim' },
          { 'email': 'mail@gmail.com', 'name': 'Another Kim' },
          { 'email': 'mail@gmail.com', 'name': 'Friend of Kim' },
          { 'email': 'mail@gmail.com', 'name': 'Mother of Kim' },
          { 'email': 'mail@gmail.com', 'name': 'Father of Kim' },
        ];
      expect(addUser(INITIAL_STATE, {
        type: ContactTypes.ADD_USER,
        email: 'joni@gmail.com',
        name: 'joni',
      })).toEqual(expectedResult);
    });

    it('should send a proper add user action', () => {
      const name = 'B-Men';
      const email= 'Bman@btpn.com';
      const actualAction = contactActions.addUser(name, email);
      const expectedAction= {
        type: ContactTypes.ADD_USER,
        email: 'Bman@btpn.com',
        name: 'B-Men',
      };
      expect(actualAction).toEqual(expectedAction);
    });

    it('should send a proper add user action with name and email', () => {
      const name = 'Tulul';
      const email= 'Tulul@gmail.com';
      const actualAction = contactActions.addUser(name, email);
      const expectedAction= {
        type: ContactTypes.ADD_USER,
        email: 'Tulul@gmail.com',
        name: 'Tulul',
      };
      expect(actualAction).toEqual(expectedAction);
    });

    it('has one reducer handler', () => {
      expect(HANDLERS).toHaveProperty('ADD_USER');
      expect(Object.keys(HANDLERS).length).toBe(1);
    });
  });
});

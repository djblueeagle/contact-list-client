import reducer from '../src/reducers/contact';

describe('reducer', () => {
  describe('contact', () => {
    it('should return the initial state', () => {
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
      expect(reducer([], {
        'payload':
          {
            'email': 'banu@gmail.com',
            'name': 'banu',
          },
        'type': 'ADD_CONTACT',
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
      expect(reducer(undefined, {
        'payload':
          {
            'email': 'joni@gmail.com',
            'name': 'joni',
          },
        'type': 'ADD_CONTACT',
      })).toEqual(expectedResult);
    });
  });
});

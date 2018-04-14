import reducer from '../src/reducers/filter';

describe('reducer', () => {
  describe('filter', () => {
    it('should return the initial state', () => {
      const expectedResult = '';
      expect(reducer(undefined, {})).toEqual(expectedResult);
    });
    it('should change keyword to rangga', () => {
      const expectedResult = 'rangga';
      expect(reducer(undefined,
        { 'payload': 'rangga', 'type': 'CHANGE_KEYWORD' })).toEqual(expectedResult);
    });

    it('should change keyword to bman', () => {
      const expectedResult = 'bman';
      expect(reducer(undefined,
        { 'payload': 'bman', 'type': 'CHANGE_KEYWORD' })).toEqual(expectedResult);
    });
  });
});

import reducer from '../src/redux/filter';
import filterActions, { changeFilterState, FilterTypes, HANDLERS } from '../src/redux/filter';

describe('reducer', () => {
  describe('filter', () => {
    xit('should return the initial state', () => {
      const expectedResult = '';
      expect(reducer(undefined, {})).toEqual(expectedResult);
    });

    it('should change keyword to rangga', () => {
      const expectedResult = 'rangga';
      expect(changeFilterState('', {
        type: FilterTypes.CHANGE_KEYWORD,
        keyword: 'rangga',
      })).toEqual(expectedResult);
    });

    it('should change keyword to ramzi', () => {
      const expectedResult = 'ramzi';
      expect(changeFilterState('', {
        type: FilterTypes.CHANGE_KEYWORD,
        keyword: 'ramzi',
      })).toEqual(expectedResult);
    });

    it('should send a proper change keyword action', () => {
      const keyword = 'Si K';
      const actualAction = filterActions.changeKeyword(keyword);
      const expectedAction = {
        type: FilterTypes.CHANGE_KEYWORD,
        keyword: 'Si K',
      };
      expect(actualAction).toEqual(expectedAction);
    });

    it('should send a proper change keyword action with new keyword', () => {
      const keyword = 'Daniel';
      const actualAction = filterActions.changeKeyword(keyword);
      const expectedAction = {
        type: FilterTypes.CHANGE_KEYWORD,
        keyword: 'Daniel',
      };
      expect(actualAction).toEqual(expectedAction);
    });

    it('has one reducer handler', () => {
      expect(HANDLERS).toHaveProperty('CHANGE_KEYWORD');
      expect(Object.keys(HANDLERS).length).toBe(1);
    });
  });
});

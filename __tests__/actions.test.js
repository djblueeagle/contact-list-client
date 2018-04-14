import { addContact, changeFilterKeyword } from '../src/actions';

describe('actions', () => {
  describe('add Contact', () => {
    it('should create an action for add contact', () => {
      const name = 'Fernando';
      const email = 'Fernando@gmail.com';
      const expectedAction = {
        'payload':
          {
            'email': 'Fernando@gmail.com',
            'name': 'Fernando',
          },
        'type': 'ADD_CONTACT',
      };

      expect(addContact(name, email)).toEqual(expectedAction);
    });

    it('should create another proper action for add contact', () => {
      const name = 'banu';
      const email = 'banu@gmail.com';
      const expectedAction = {
        'payload':
          {
            'email': 'banu@gmail.com',
            'name': 'banu',
          },
        'type': 'ADD_CONTACT',
      };

      expect(addContact(name, email)).toEqual(expectedAction);
    });
  });
  describe('change Filter Keyword', () => {
    it('should create an action for changeFilterKeyword', () => {
      const keyword = '';
      const expectedAction =
        {
          'payload': '',
          'type': 'CHANGE_KEYWORD',
        };
      expect(changeFilterKeyword(keyword)).toEqual(expectedAction);
    });

    it('should create another proper action for changeFilterKeyword', () => {
      const keyword = 'Dewa';
      const expectedAction =
        {
          'payload': 'Dewa',
          'type': 'CHANGE_KEYWORD',
        };
      expect(changeFilterKeyword(keyword)).toEqual(expectedAction);
    });
  });
});

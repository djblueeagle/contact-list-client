import React from 'react';
import { shallow } from 'enzyme';
import { FlatList } from 'react-native';
import ContactsList from '../src/components/ContactsList';
import ContactItem from '../src/components/ContactsItem';
import configureStore from 'redux-mock-store';

describe('ContactsList', () => {

  const middlewares = [];
  const mockStore = configureStore(middlewares);
  let store;
  let wrapper;
  describe('render item', () => {
    beforeEach(() => {
      const initialState = {
        contact: [{ name: 'DP', email: 'hsdpal@gmail.com' }],
        filter: '',
      };
      store = mockStore(initialState);
      wrapper = shallow(<ContactsList store={store} />).dive();
    });

    it('render flatlist with no item', () => {
      const flatList = wrapper.find(FlatList);
      expect(flatList.length).toBe(1);
      expect(flatList.find(ContactItem).length).toBe(0);
    });

    it('received 1 props from store', () => {
      const flatList = wrapper.find(FlatList);
      wrapper.update();
      expect(flatList.props().data.length).toBe(1);
    });

    it('render 1 item/row with name DP', () => {
      const flatList = wrapper.find(FlatList);
      expect(flatList.props().data).toEqual([{ 'email': 'hsdpal@gmail.com', 'name': 'DP' }]);
    });
  });

  describe('#filteredContact', () => {
    it('should show all data in the filter keyword is empty', () => {
      const initialState = {
        contact: [
          { name: 'DP', email: 'hsdpal@gmail.com' },
          { name: 'Nando', email: 'nando@gmail.com' },
          { name: 'Dewa', email: 'dewa@gmail.com' },
          { name: 'chetan', email: 'chetan@gmail.com' },
        ],
        filter: '',
      };
      store = mockStore(initialState);
      wrapper = shallow(<ContactsList store={store} />).dive();
      expect(wrapper.props().data.length).toBe(4);
      expect(wrapper.props().data).toEqual([
        { name: 'DP', email: 'hsdpal@gmail.com' },
        { name: 'Nando', email: 'nando@gmail.com' },
        { name: 'Dewa', email: 'dewa@gmail.com' },
        { name: 'chetan', email: 'chetan@gmail.com' },
      ]);
    });

    it('should 1 data in the filter keyword is chetan', () => {
      const initialState = {
        contact: [
          { name: 'DP', email: 'hsdpal@gmail.com' },
          { name: 'Nando', email: 'nando@gmail.com' },
          { name: 'Dewa', email: 'dewa@gmail.com' },
          { name: 'chetan', email: 'chetan@gmail.com' },
        ],
        filter: 'chetan',
      };
      store = mockStore(initialState);
      wrapper = shallow(<ContactsList store={store} />).dive();
      expect(wrapper.props().data.length).toBe(1);
      expect(wrapper.props().data).toEqual([{ 'email': 'chetan@gmail.com', 'name': 'chetan' }]);
    });
  });
});

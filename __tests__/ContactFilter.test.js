import React from 'react';
import { shallow } from 'enzyme';
import ContactFilter from '../src/components/ContactFilter';
import Button from '../src/components/Button';
import configureStore from 'redux-mock-store';

describe('ContactFilter', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initialState = '';
  let store;
  let wrapper;
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<ContactFilter store={store} />).dive();
  });
  describe('render', () => {
    it('render TextInput and Search button', () => {
      const inputKeyword = wrapper.find('TextInput');
      const btnSearch = wrapper.find('Button');
      expect(inputKeyword.length).toBe(1);
      expect(btnSearch.length).toBe(1);
    });

    it('render empty string for the first time', () => {
      expect(wrapper.state().keyword).toBe('');
    });
  });

  describe('#onChangeKeyword', () => {
    it('change state.keyword to Dewa when input on TextInput changed to Dewa', () => {
      const inputKeyword = wrapper.find('TextInput');
      inputKeyword.props().onChangeText('Dewa');
      expect(wrapper.state().keyword).toBe('Dewa');
    });

    it('change state.keyword to DP when input on TextInput changed to DP', () => {
      const inputKeyword = wrapper.find('TextInput');
      inputKeyword.props().onChangeText('DP');
      expect(wrapper.state().keyword).toBe('DP');
    });
  });

  describe('#onFilterContact', () => {
    it('trigger a proper actions when the button filter is being clicked', () => {
      const btnFilter = wrapper.find('Button');
      wrapper.setState({ keyword: ' ' });
      btnFilter.props().onPress();
      const actions = store.getActions();
      expect(actions).toEqual([{ 'payload': ' ', 'type': 'CHANGE_KEYWORD' }]);
    });

    it('send a proper actions when the button filter is being clicked', () => {
      const btnFilter = wrapper.find('Button');
      wrapper.setState({ keyword: 'Nando' });
      btnFilter.props().onPress();
      const actions = store.getActions();
      expect(actions).toEqual([{ 'payload': 'Nando', 'type': 'CHANGE_KEYWORD' }]);
    });
  });
});

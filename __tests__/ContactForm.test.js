import React from 'react';
import configureStore from 'redux-mock-store';
import ContactForm from '../src/components/ContactForm';
import { shallow } from 'enzyme';
import { TextInput } from 'react-native';
import Button from '../src/components/Button';

describe('ContactForm', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initialState = '';
  let store;
  let wrapper;
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<ContactForm store={store} />).dive();
  });
  describe('render', () => {
    it('render two TextInput and one Button', () => {
      const textInputs = wrapper.find(TextInput);
      const button = wrapper.find(Button);
      expect(textInputs.length).toBe(2);
      expect(button.length).toBe(1);
    });

    it('render empty name state for the first time', () => {
      expect(wrapper.state().name).toBe('');
    });

    it('render empty email state for the first time', () => {
      expect(wrapper.state().email).toBe('');
    });

    it('render TextInput with placeholder \'Name\' and \'Email\' and button with text SAVE', () => {
      const textInputs = wrapper.find(TextInput);
      const buttonSave = wrapper.find(Button);
      expect(textInputs.at(0).find('[placeholder=\'Name\']').length).toBe(1);
      expect(textInputs.at(1).find('[placeholder=\'Email\']').length).toBe(1);
      expect(buttonSave.find('[value=\'Save\']').length).toBe(1);
    });

    it('change state.name when event onChange occur in Name TextInput', () => {
      const textInputs = wrapper.find(TextInput);
      const nameInput = textInputs.find('[placeholder=\'Name\']');
      nameInput.props().onChangeText('Dewa');
      expect(wrapper.state().name).toBe('Dewa');
    });

    it('change state.email when event onChange occur in Email TextInput', () => {
      const textInputs = wrapper.find(TextInput);
      const emailInput = textInputs.find('[placeholder=\'Email\']');
      emailInput.props().onChangeText('awidiya.dewa@gmail.com');
      expect(wrapper.state().email).toBe('awidiya.dewa@gmail.com');
    });

    it('should not send the action if the name and email is empty', () => {
      const btnFilter = wrapper.find('Button');
      wrapper.setState({ name: '', email: '' });
      btnFilter.props().onPress();
      const actions = store.getActions();
      expect(actions).toEqual([]);
    });

    it('send a proper actions when the button save is being clicked', () => {
      const btnFilter = wrapper.find('Button');
      wrapper.setState({ name: 'neel', email: 'neel@gmail.com' });
      btnFilter.props().onPress();
      const actions = store.getActions();
      expect(actions).toEqual([{ 'email': 'neel@gmail.com', 'name': 'neel', 'type': 'ADD_USER' }]);
    });
  });
});

import React from 'react';
import Button from '../src/components/Button';
import { shallow } from 'enzyme';

describe('Button', () => {
  describe('render', () => {
    it('should render Touchable Opacity component properly', () => {
      const wrapper = shallow(<Button />);
      expect(wrapper.find('TouchableOpacity').length).toBe(1);
    });
    it('should render Text Opacity component properly', () => {
      const wrapper = shallow(<Button />);
      expect(wrapper.find('Text').length).toBe(1);
    });
    it('should return a callback when touchable opacity get clicked', () => {
      const mockFn = jest.fn();
      const wrapper = shallow(<Button onPress={mockFn}/>);
      const button = wrapper.find('TouchableOpacity');
      button.props().onPress();
      expect(mockFn.mock.calls.length).toBe(1);
    });
    it('should render the view based on the value that passed to the props', () => {
      const value = 'Save';
      const wrapper = shallow(<Button value={value}/>);
      const Text = wrapper.find('Text').dive();
      expect(Text.text()).toBe(value);
    });

    it('should render the search value based on the value that passed to the props', () => {
      const value = 'Search';
      const wrapper = shallow(<Button value={value}/>);
      const Text = wrapper.find('Text').dive();
      expect(Text.text()).toBe(value);
    });
  });
});

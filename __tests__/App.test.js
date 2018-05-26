import React from 'react';
import App from '../src/components/App';
import { shallow } from 'enzyme';
import ContactForm from '../src/components/ContactForm';
import ContactFilter from '../src/components/ContactFilter';
import ContactsList from '../src/components/ContactsList';

describe('App', () => {
  describe('render', () => {
    it('render children ContactForm, ContactFilter, and ContactsList', () => {
      const wrapper = shallow(<App />);
      const contactForm = wrapper.find(ContactForm);
      const contactFilter = wrapper.find(ContactFilter);
      const contactList = wrapper.find(ContactsList);
      expect(contactForm.length).toBe(1);
      expect(contactFilter.length).toBe(1);
      expect(contactList.length).toBe(1);
    });
    it('render provider', () => {
      const wrapper = shallow(<App />);
      const provider = wrapper.find('Provider');
      expect(provider.length).toBe(1);
    });
  });
});

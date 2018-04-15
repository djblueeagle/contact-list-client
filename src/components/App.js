/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ContactList from './ContactsList';
import ContactForm from './ContactForm';
import ContactFilter from './ContactFilter';
import reducer from '../redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#454353',
  },
});

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ContactFilter />
        <ContactList />
        <ContactForm />
      </View>
    </Provider>
  );
}

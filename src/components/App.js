/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ContactList from './ContactsList';
import ContactForm from './ContactForm';
import ContactFilter from './ContactFilter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';

const store = createStore(reducer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#454353',
  },
});

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
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
}

import React from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ContactItem from './ContactsItem';

/**
 * Showing list of contacts
 */

const ContactsList = ({ filteredContact }) => {
  return (
    <FlatList
      data={filteredContact}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (<ContactItem {...item} />)}
    />
  );
};

const filteredContact = (contacts, keyword) => {
  const keywordLowerCase = keyword.toLowerCase();
  return contacts.filter((contact) => {
    const contactNameLowerCase = contact.name.toLowerCase();
    return contactNameLowerCase.includes(keywordLowerCase);
  });
};

const mapStateToProps = ({ contact, filter }) => ({
  filteredContact: filteredContact(contact, filter),
});

export default connect(mapStateToProps)(ContactsList);

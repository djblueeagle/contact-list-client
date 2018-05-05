import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Button from './Button';
import filterActions from '../redux/filter';
import { translate } from '../Localization';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
    paddingTop: 20,
    backgroundColor: '#3F3E4F',
  },
  filterInput: {
    flex: 1,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#ffffff20',
    marginLeft: 3,
    marginRight: 3,
    paddingLeft: 5,
    paddingRight: 5,
    color: 'white',
  },
});

class ContactFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
    this._onChangeKeyword = this._onChangeKeyword.bind(this);
    this._onFilterContact = this._onFilterContact.bind(this);
  }

  _onChangeKeyword(keyword) {
    this.setState({ keyword });
  }

  _onFilterContact() {
    this.props.onChangeKeyword(this.state.keyword);
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <TextInput
          style={styles.filterInput}
          value={this.state.keyword}
          placeholder={translate('filter.placeholder')}
          underlineColorAndroid='transparent'
          placeholderTextColor="white"
          onChangeText={this._onChangeKeyword}
          onSubmitEditing={this._onFilterContact}
        />
        <Button
          onPress={this._onFilterContact}
          value={translate('filter.title')}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeKeyword: (keyword) =>
      dispatch(filterActions.changeKeyword(keyword)),
  };
};

export default connect(null, mapDispatchToProps)(ContactFilter);

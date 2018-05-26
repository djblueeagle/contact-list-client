import React from 'react';
import Localization, { translate } from '../../src/Localization';


describe('test localization', () => {

  it('test english localization for filter title', () => {
    Localization.locale = 'en';
    const result = translate('filter.title');
    expect(result).toEqual('Search');
  });

  it('test english localization for filter placeholder', () => {
    Localization.locale = 'en';
    const result = translate('filter.placeholder');
    expect(result).toEqual('Search Here');
  });

  it('test english localization for form nameLabel', () => {
    Localization.locale = 'en';
    const result = translate('form.nameLabel');
    expect(result).toEqual('Name');
  });

  it('test english localization for form emailLabel', () => {
    Localization.locale = 'en';
    const result = translate('form.emailLabel');
    expect(result).toEqual('Email');
  });

  it('test english localization for form saveLabel', () => {
    Localization.locale = 'en';
    const result = translate('form.saveLabel');
    expect(result).toEqual('Save');
  });
});

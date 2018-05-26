import React from 'react';
import Localization, { translate } from '../../src/Localization';


describe('test localization', () => {

  it('test english localization for filter title', () => {
    Localization.locale = 'in-ID';
    const result = translate('filter.title');
    expect(result).toEqual('Cari');
  });

  it('test english localization for filter placeholder', () => {
    Localization.locale = 'in-ID';
    const result = translate('filter.placeholder');
    expect(result).toEqual('Ketik Pencarianmu');
  });

  it('test english localization for form nameLabel', () => {
    Localization.locale = 'in-ID';
    const result = translate('form.nameLabel');
    expect(result).toEqual('Nama');
  });

  it('test english localization for form emailLabel', () => {
    Localization.locale = 'in-ID';
    const result = translate('form.emailLabel');
    expect(result).toEqual('Email');
  });

  it('test english localization for form saveLabel', () => {
    Localization.locale = 'in-ID';
    const result = translate('form.saveLabel');
    expect(result).toEqual('Simpan');
  });
});

import I18n from 'react-native-i18n';

import en from './en.json';
import id from './id.json';

I18n.fallbacks = true;

I18n.translations = {
  en: en,
  'in-ID': id,
  'id-ID': id,
};


export function translate(name, params = {}) {
  return I18n.t(name, params);
}

export default I18n;

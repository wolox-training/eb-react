import { init, use } from 'i18next';
import { initReactI18next } from 'react-i18next';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

use(initReactI18next);

init({
  lng: 'en',
  initImmediate: false
});

requireAll(require.context('..', true, /i18n\.(js|ts)$/));

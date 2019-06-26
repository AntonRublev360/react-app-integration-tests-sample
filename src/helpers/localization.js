import intl from 'react-intl-universal';
import locales from '../assets/locales/index';

const DEFAULT_LOCALE = 'en-US';

intl.init({
  currentLocale: DEFAULT_LOCALE,
  locales
});

export default intl;

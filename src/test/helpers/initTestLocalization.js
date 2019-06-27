import intl from 'react-intl-universal';
import locales from '../../assets/locales/index';

const DEFAULT_LOCALE = 'en-US';

intl.init({
  currentLocale: DEFAULT_LOCALE,
  locales: {
    [DEFAULT_LOCALE]: createTestLocale(locales[DEFAULT_LOCALE])
  }
});

function createTestLocale(localesObj, path = '') {
  return Object.entries(localesObj).reduce((testLocalesObj, [key, value]) => {
    if (typeof value === 'string') {
      testLocalesObj[key] = `${path}${key}`;
    } else {
      testLocalesObj[key] = createTestLocale(value, `${key}.`);
    }
    return testLocalesObj;
  }, {});
}

export default intl;

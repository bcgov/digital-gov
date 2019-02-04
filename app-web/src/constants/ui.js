import createIntlMessage from '../utils/createIntlMessage';
// all User Interface related constants
import { HOME_ROUTE, EXTERNAL } from './routes';

export const UI_IDS = {
  BANNER: 'digital-gov-banner',
};

// list of navigation objects used by the footer
// harnesses react-intl library hence the fn calls
export const FOOTER_NAVIGATION = [
  {
    to: HOME_ROUTE,
    message: createIntlMessage(null, 'Home', 'Go back to home'),
  },
  {
    to: EXTERNAL.DISCLAIMER,
    message: createIntlMessage(null, 'Disclaimer', 'View BC Gov disclaimer'),
  },
  {
    to: EXTERNAL.PRIVACY,
    message: createIntlMessage(null, 'Privacy', 'View BC Gov Privacy Policy'),
  },
  {
    to: EXTERNAL.ACCESSIBILITY,
    message: createIntlMessage(null, 'Accessibility', 'View BC Gov Accessiblity Guidelines'),
  },
  {
    to: EXTERNAL.COPYRIGHT,
    message: createIntlMessage(null, 'Copyright', 'View BC Gov Copyright specification'),
  },
];

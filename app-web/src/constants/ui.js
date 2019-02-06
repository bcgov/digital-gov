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

// this essentially a static list,
// we'd except that lab projects would come from a gatsby source plugin/graphq at one point
export const LAB_PROJECTS = [
  {
    to: 'https://projects.eao.gov.bc.ca',
    message: createIntlMessage(
      null,
      'EAO Project Information and Collaboration (EPIC)',
      'A lab project',
    ),
  },
  {
    to: 'https://comment.nrs.gov.bc.ca',
    message: createIntlMessage(null, 'Public Review and Comment (PRC)', 'A lab project'),
  },
  {
    to: 'www2.gov.bcc.ca/gov/content',
    message: createIntlMessage(null, 'GroundWater Wells and Aquifers (GWELLS)', 'A lab project'),
  },
  {
    to: 'https://mines.nrs.gov.bc.ca',
    message: createIntlMessage(null, 'Mines Digital Services', 'A lab project'),
  },
  {
    to: 'https://vonx.io',
    message: createIntlMessage(null, 'Verifiable Organizations Network (VON)', 'A lab project'),
  },
  {
    to: 'https://bcdevexchange.org',
    message: createIntlMessage(null, "BC Developers' Exchange", 'A lab project'),
  },
  {
    to: 'https://developer.gov.bc.ca',
    message: createIntlMessage(null, 'Devhub', 'A lab project'),
  },
];

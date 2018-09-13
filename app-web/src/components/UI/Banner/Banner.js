import React from 'react';
import PropTypes from 'prop-types';
import { UI_IDS } from '../../../constants/ui';
import { HOME_ROUTE } from '../../../constants/routes';
import GovLogo from '../GovLogo/GovLogo';
import AppLogo from '../AppLogo/AppLogo';
import PhaseBanner from '../PhaseBanner/PhaseBanner';
import Link from '../Link/Link';
import classes from './Banner.module.css';

const Banner = () => {
  return (
    <Link id={UI_IDS.BANNER} className={classes.Logo} to={HOME_ROUTE}>
      <GovLogo />
      <AppLogo />
      <PhaseBanner />
    </Link>
  );
};

Banner.propTypes = {
  navigateOnClickPath: PropTypes.string,
};

Banner.defaultProps = {
  navigateOnClickPath: '',
};

export default Banner;

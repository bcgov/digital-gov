import React from 'react';
import PropTypes from 'prop-types';
import classes from './Header.module.css';
import Banner from '../UI/Banner/Banner';
import Hamburger from '../UI/Hamburger/Hamburger';

export const PrimaryHeader = ({ showHamburger, hamburgerClicked }) => (
  <header className={classes.PrimaryHeader}>
    <Banner />
    <div className={classes.Other}>
      {showHamburger ? (
        <Hamburger clicked={hamburgerClicked} className={classes.Hamburger} />
      ) : null}
    </div>
  </header>
);

PrimaryHeader.propTypes = {
  showHamburger: PropTypes.bool,
  hamburgerClicked: PropTypes.func,
};

PrimaryHeader.defaultProps = {
  showHamburger: false,
  hamburgerClicked: () => undefined,
};

export default PrimaryHeader;

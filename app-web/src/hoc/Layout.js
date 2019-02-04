import React from 'react';
import PropTypes from 'prop-types';
// stylesheets
import '../assets/styles/index.css';
// layout local componenets
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export class Layout extends React.Component {
  render() {
    const { children, toggleMenu } = this.props;

    return (
      <div
        className="layout"
        css={{
          margin: '0 auto',
          padding: '55px 0 44px',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header showHamburger hamburgerClicked={toggleMenu} />

        {children}

        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showHamburger: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

Layout.defaultProps = {
  showHamburger: false,
  toggleMenu: () => null,
};

export default Layout;

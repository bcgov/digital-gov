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
      <div className="layout">
        <Header showHamburger hamburgerClicked={toggleMenu} />

        {children}

        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  useAuth: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

Layout.defaultProps = {
  showHamburger: false,
};

export default Layout;

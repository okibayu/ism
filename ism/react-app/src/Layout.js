import NavbarTop from "./components/NavbarTop";
import Footer from 'components/reused/Footer';
import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
      <div id="main-wrapper">
        <header id="header">
          <NavbarTop />
        </header>
      {this.props.children}
      <section className="footer">
          <Footer />
        </section>
        </div>
    );
  }
}

export default Layout




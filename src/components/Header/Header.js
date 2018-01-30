/* eslint-disable */

import React from 'react';
import { NavbarToggler, NavbarBrand } from 'reactstrap';

import Link from '../Link';

class Header extends React.Component {
  /* eslint-disable class-methods-use-this */
  sidebarToggle(e) {
    console.log('==============sidebarToggle=================', e);
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  /* eslint-disable class-methods-use-this */
  sidebarMinimize(e) {
    console.log('==============sidebarMinimize=================', e);
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  /* eslint-disable class-methods-use-this */
  mobileSidebarToggle(e) {
    console.log('==============mobileSidebarToggle=================', e);
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  /* eslint-disable class-methods-use-this */
  asideToggle(e) {
    console.log('==============asideToggle=================', e);
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    return (
      <header className="app-header navbar">
        <Link
          onClick={() => {
            console.log('==========hello world============');
          }}
        >
          Click Test
        </Link>
        <NavbarToggler
          className="d-lg-none"
          onClick={() => {
            console.log('======================');
          }}
        >
          <span className="navbar-toggler-icon" />
        </NavbarToggler>
        <NavbarBrand href="#" />
        <NavbarToggler
          className="d-md-down-none mr-auto"
          onClick={() => {
            console.log('======================');
          }}
        >
          <span className="navbar-toggler-icon" />
        </NavbarToggler>
        <NavbarToggler
          className="d-md-down-none"
          onClick={() => {
            console.log('======================');
          }}
        >
          <span className="navbar-toggler-icon" />
        </NavbarToggler>
      </header>
    );
  }
}

export default Header;

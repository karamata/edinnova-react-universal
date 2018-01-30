import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';

import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import Breadcrumb from '../Breadcrumb';
import Aside from '../Aside';

import '../../scss/style.scss';
import '../../scss/core/_dropdown-menu-right.scss';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    pathname: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Breadcrumb pathname={this.props.pathname} />
            <Container fluid>
              <div>Hello World!</div>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;

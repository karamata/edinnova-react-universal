import React, { Component } from 'react';

class SidebarMinimizer extends Component {
  constructor(props) {
    super();
    this.setState({ ...props });
    this.sidebarMinimize = this.sidebarMinimize.bind(this);
    this.brandMinimize = this.brandMinimize.bind(this);
  }

  /* eslint-disable class-methods-use-this */
  /* eslint-disable no-unused-vars */
  sidebarMinimize(event) {
    document.body.classList.toggle('sidebar-minimized');
  }

  /* eslint-disable class-methods-use-this */
  /* eslint-disable no-unused-vars */
  brandMinimize(event) {
    document.body.classList.toggle('brand-minimized');
  }

  render() {
    return (
      <button
        className="sidebar-minimizer"
        type="button"
        onClick={event => {
          this.sidebarMinimize(event);
          this.brandMinimize(event);
        }}
      />
    );
  }
}

export default SidebarMinimizer;

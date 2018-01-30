import React, { Component } from 'react';
import { Badge, Nav, NavItem, NavLink } from 'reactstrap';
import classNames from 'classnames';
import SidebarFooter from '../SidebarFooter';
import SidebarForm from '../SidebarForm';
import SidebarHeader from '../SidebarHeader';
import SidebarMinimizer from '../SidebarMinimizer';
import Link from '../Link';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.activeRoute = this.activeRoute.bind(this);
    this.hideMobile = this.hideMobile.bind(this);
  }

  /* eslint-disable class-methods-use-this */
  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  /* eslint-disable class-methods-use-this */
  activeRoute(routeName, props) {
    // return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
    return props.location.pathname.indexOf(routeName) > -1
      ? 'nav-item nav-dropdown open'
      : 'nav-item nav-dropdown';
  }

  /* eslint-disable class-methods-use-this */
  hideMobile() {
    if (document.body.classList.contains('sidebar-mobile-show')) {
      document.body.classList.toggle('sidebar-mobile-show');
    }
  }

  render() {
    const props = { ...this.props };

    // badge addon to NavItem
    const badgeResult = badge => {
      if (badge) {
        const classes = classNames(badge.class);
        return (
          <Badge className={classes} color={badge.variant}>
            {badge.text}
          </Badge>
        );
      }

      return null;
    };

    // simple wrapper for nav-title item
    const wrapper = item =>
      item.wrapper && item.wrapper.element
        ? React.createElement(
            item.wrapper.element,
            item.wrapper.attributes,
            item.name,
          )
        : item.name;

    // nav list section title
    const titleResult = (title, key) => {
      const classes = classNames('nav-title', title.class);
      return (
        <li key={key} className={classes}>
          {wrapper(title)}{' '}
        </li>
      );
    };

    // nav list divider
    const dividerResult = (divider, key) => {
      const classes = classNames('divider', divider.class);
      return <li key={key} className={classes} />;
    };

    const isExternal = url => {
      const link = url ? url.substring(0, 4) : '';
      return link === 'http';
    };

    // nav link
    const navLink = (item, key, classes) => {
      const url = item.url ? item.url : '';
      return (
        <NavItem key={key} className={classes.item}>
          {isExternal(url) ? (
            <NavLink href={url} className={classes.link} active>
              <i className={classes.icon} />
              {item.name}
              {badgeResult(item.badge)}
            </NavLink>
          ) : (
            <Link to={url} className={classes.link} onClick={this.hideMobile}>
              <i className={classes.icon} />
              {item.name}
              {badgeResult(item.badge)}
            </Link>
          )}
        </NavItem>
      );
    };

    // nav label with nav link
    const navLabel = (item, key) => {
      const classes = {
        item: classNames('hidden-cn', item.class),
        link: classNames('nav-label', item.class ? item.class : ''),
        icon: classNames(
          !item.icon ? 'fa fa-circle' : item.icon,
          item.label.variant ? `text-${item.label.variant}` : '',
          item.label.class ? item.label.class : '',
        ),
      };
      return navLink(item, key, classes);
    };

    /* eslint-disable jsx-a11y/click-events-have-key-events */
    const navDropdown = (item, key) => (
      <li key={key} className={this.activeRoute(item.url, props)}>
        <a
          className="nav-link nav-dropdown-toggle"
          role="button"
          onClick={this.handleClick}
        >
          <i className={item.icon} />
          {item.name}
        </a>
        <ul className="nav-dropdown-items">{navList(item.children)}</ul>
      </li>
    );

    const navType = (item, idx) => {
      if (item.title) {
        return titleResult(item, idx);
      } else if (item.divider) {
        return dividerResult(item, idx);
      } else if (item.label) {
        return navLabel(item, idx);
      }
      return item.children ? navDropdown(item, idx) : navItem(item, idx);
    };

    // nav item with nav link
    const navItem = (item, key) => {
      const classes = {
        item: classNames(item.class),
        link: classNames(
          'nav-link',
          item.variant ? `nav-link-${item.variant}` : '',
        ),
        icon: classNames(item.icon),
      };
      return navLink(item, key, classes);
    };

    const navList = items => items.map((item, index) => navType(item, index));

    // sidebar-nav root
    return (
      <div className="sidebar">
        <SidebarHeader />
        <SidebarForm />
        <nav className="sidebar-nav">
          <Nav>
            {navList([
              {
                name: 'Dashboard',
                url: '/dashboard',
                icon: 'fa fa-tachometer',
                badge: {
                  variant: 'info',
                  text: 'NEW',
                },
              },
            ])}
          </Nav>
        </nav>
        <SidebarFooter />
        <SidebarMinimizer />
      </div>
    );
  }
}

export default Sidebar;

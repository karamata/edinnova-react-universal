/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import Link from '../Link';
import routes from '../../routes';

const checkPathIsEquals = (regexPath, path) => {
  if (regexPath.indexOf('(') > 0 && regexPath.indexOf(')') > 0) {
    const regexStr = regexPath.substring(
      regexPath.indexOf('(') + 1,
      regexPath.indexOf(')'),
    );

    return new RegExp(`^${regexStr}$`).test(
      path.startsWith('/') ? path.substring(1) : path,
    );
  }
  return regexPath === path;
};

const findChildren = (children, path) => {
  const findObj = children
    .filter(child => checkPathIsEquals(child.path, path))
    .pop();

  if (findObj) {
    return findObj.children;
  }
  return [];
};

const findRouteName = (prePaths, path) => {
  let children = routes.children;
  for (let i = 1; i < prePaths.length; i++) {
    children = findChildren(children, prePaths[i]);
  }

  const findObj = children
    .filter(child => checkPathIsEquals(child.path, path))
    .pop();

  const getPathName = findObj => {
    if (findObj.pathName) {
      return findObj.pathName;
    }

    if (!findObj.children) {
      return '';
    }

    const findChild = findObj.children.filter(child => child.path === '').pop();

    return findChild ? findChild.pathName : '';
  };

  return findObj ? getPathName(findObj) : '';
};

const getPaths = pathname => {
  if (pathname === '/') return [''];

  return pathname.split('/').map((path, idx) => (idx === 0 ? '' : `/${path}`));
};

const BreadcrumbsItem = ({ pathname, prePaths, path, isLast }) => {
  const routeName = findRouteName(prePaths, path);
  if (routeName) {
    return isLast ? (
      <BreadcrumbItem active>{routeName}</BreadcrumbItem>
    ) : (
      <BreadcrumbItem>
        <Link to={pathname}>{routeName}</Link>
      </BreadcrumbItem>
    );
  }

  return null;
};

const Breadcrumbs = ({ pathname }) => {
  const paths = getPaths(pathname);
  const items = paths.map((path, i) => (
    <BreadcrumbsItem
      key={i}
      pathname={pathname}
      prePaths={i === 0 ? [] : paths.slice(0, i)}
      path={path}
      isLast={i === paths.length - 1}
    />
  ));
  return <Breadcrumb>{items}</Breadcrumb>;
};

export default props => <Breadcrumbs pathname={props.pathname} />;

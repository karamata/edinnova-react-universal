import React from 'react';
import Dashboard from './Dashboard';
import Layout from '../../components/Layout';

/**
 { router:
   UniversalRouter {
     baseUrl: '',
     resolveRoute: [Function: resolveRoute],
     context: { router: [Circular] },
     root:
      { path: '',
        children: [Array],
        action: [Function: action],
        parent: null } },
    insertCss: [Function: insertCss],
    pathname: '/category/new',
    query: {},
    next: [Function: next],
    route:
    { path: '/new',
      load: [Function: load],
      parent: { path: '/category', children: [Array], parent: [Object] } },
    baseUrl: '/category',
    path: '/new',
    keys: [],
    params: {}
  }
 */
/* eslint-disable no-unused-vars */
async function action(context, params) {
  return {
    title: 'Edinnova Examination Admin Dashboard',
    component: (
      <Layout pathname={context.pathname}>
        <Dashboard />
      </Layout>
    ),
  };
}

export default action;

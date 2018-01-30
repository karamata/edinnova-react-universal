
const routes = {
  path: '',
  children: [
    {
      path: '',
      pathName: 'Dashboard',
      load: () => import('./dashboard'),
    },

    {
      path: '/category',
      children: [
        {
          path: '',
          pathName: 'Category',
          load: () => import('./category'),
        },

        {
          path: '/new',
          pathName: 'Create New Category',
          load: () => import('./category').then(category => category.newOne),
        },

        {
          path: '/:categoryUrl([a-zA-Z0-9-]*)',
          pathName: 'Update Category',
          load: () => import('./category').then(category => category.editOne),
        },
      ],
    },

    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import('./not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'} - www.reactstarterkit.com`;
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;

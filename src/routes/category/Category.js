import React from 'react';
import PropTypes from 'prop-types';

import './Category.scss';

class Category extends React.Component {
  static propTypes = {};

  render() {
    return (
      <div className={s.root}>
        <div className={s.container} />
      </div>
    );
  }
}

export default Category;

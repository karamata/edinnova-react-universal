/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import './Feedback.scss';

class Feedback extends React.Component {
  render() {
    return (
      <div className="root">
        <div className="container">
          <a
            className="link"
            href="https://gitter.im/kriasoft/react-starter-kit"
          >
            Ask a question
          </a>
          <span className="spacer">|</span>
          <a
            className="link"
            href="https://github.com/kriasoft/react-starter-kit/issues/new"
          >
            Report an issue
          </a>
        </div>
      </div>
    );
  }
}

export default Feedback;

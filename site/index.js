/**
 * @copyright 2015, Prometheus Research
 */

import React from 'react'
import * as ReactForms from '../src/index';

function Example({children, ...props}) {
  return (
    <div>
      {children}
    </div>
  );
}

function Sidebar() {
  return (
    <div>
    </div>
  );
}

function Chrome() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export class component extends React.Component {

  render() {
    return (
      <Chrome>
      </Chrome>
    );
  }
}

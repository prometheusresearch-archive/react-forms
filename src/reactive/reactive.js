/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import React from 'react';
import {derivation, Reactor} from 'derivable';
import isArray from 'lodash/isArray';
import {eqArray} from '../equality';

class RenderReactor extends Reactor {

  constructor(component) {
    super();
    this.component = component;
  }

  react() {
    this.component.forceUpdate();
  }

}

function trackValues(d) {
  return derivation(function() {
    let results = [];
    for (let i = 0; i < d._parents.length; i++) {
      if (isArray(d._parents[i])) {
        results.push(d._parents[i][0].get());
      } else {
        results.push(d._parents[i].get());
      }
    }
    return results;
  }).withEquality(eqArray);
}

export default function reactive(Component) {

  if (Component.prototype.isReactComponent) {

    return class extends Component {

      static displayName = Component.displayName || Component.name;

      constructor(props) {
        super(props);
        this.reactor = null;
      }

      render() {
        if (this.reactor) {
          this.reactor.stop();
        }
        let d = derivation(() => super.render());
        let elem = d.get();
        this.reactor = new RenderReactor(this);
        trackValues(d).reactor(this.reactor);
        this.reactor.start();
        return elem;
      }

    };
  } else {

    return class extends React.Component {

      static displayName = Component.displayName || Component.name;

      constructor(props) {
        super(props);
        this.reactor = null;
      }

      render() {
        if (this.reactor) {
          this.reactor.stop();
        }
        let d = derivation(() => Component(this.props, this.context));
        let elem = d.get();
        this.reactor = new RenderReactor(this);
        trackValues(d).reactor(this.reactor);
        this.reactor.start();
        return elem;
      }
    };
  }
}

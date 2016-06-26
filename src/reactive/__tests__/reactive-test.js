/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {atom} from 'derivable';

import reactive from '../reactive';

describe('react-forms/reactive', function() {

  describe('reactive(Component)', function() {

    function markup(element) {
      return element.innerHTML.replace(/ data-reactid="[^"]+"/, '');
    }

    let renderCount;
    let root;

    beforeEach(function() {
      renderCount = 0;
      root = document.createElement('div');
    });

    afterEach(function() {
      ReactDOM.unmountComponentAtNode(root);
    });

    class ClassBased extends React.Component {
      render() {
        let {title, message, x} = this.props;
        renderCount += 1;
        return <div title={title} x={x && x.get()}>{message.get()}</div>;
      }
    }


    function Functional({title, message, x}) {
      renderCount += 1;
      return <div title={title} x={x && x.get()}>{message.get()}</div>;
    }

    let ReactiveClassBased = reactive(ClassBased);
    let ReactiveFunctional = reactive(Functional);

    it('preserves displayName for class based components', function() {
      class X extends React.Component {
        render() {
          return null;
        }
      }
      assert(reactive(X).displayName === 'X');
    });

    it('preserves displayName for class based components with custom displayName', function() {
      class X extends React.Component {
        static displayName = 'Y';
        render() {
          return null;
        }
      }
      assert(reactive(X).displayName === 'Y');
    });

    it('preserves displayName for functional components', function() {
      function X() {
        return null;
      }
      assert(reactive(X).displayName === 'X');
    });

    it('preserves displayName for functional components with custom displayName', function() {
      function X() {
        return null;
      }
      X.displayName = 'Y';
      assert(reactive(X).displayName === 'Y');
    });

    [ReactiveClassBased, ReactiveFunctional].forEach(function(ReactiveHello) {

      describe(ReactiveHello.displayName || ReactiveHello.name, function() {

        it('renders', function() {
          let message = atom('World');
          ReactDOM.render(<ReactiveHello message={message} title="ok" />, root);

          assert(renderCount === 1);
          assert(markup(root) === '<div title="ok">World</div>');
        });

        it('reacts', function() {
          let message = atom('World');
          ReactDOM.render(<ReactiveHello message={message} title="ok" />, root);

          assert(renderCount === 1);
          assert(markup(root) === '<div title="ok">World</div>');

          message.set('Andrey');

          assert(renderCount === 2);
          assert(markup(root) === '<div title="ok">Andrey</div>');
        });

        it('re-renders on reactive prop change', function() {
          let message = atom('World');
          ReactDOM.render(<ReactiveHello message={message} title="ok" />, root);

          assert(renderCount === 1);
          assert(markup(root) === '<div title="ok">World</div>');

          let nextMessage = atom('NextWorld');
          ReactDOM.render(<ReactiveHello message={nextMessage} title="ok" />, root);

          assert(renderCount === 2);
          assert(markup(root) === '<div title="ok">NextWorld</div>');

        });

        it('re-renders on regular prop change', function() {
          let message = atom('World');
          ReactDOM.render(<ReactiveHello message={message} title="ok" />, root);

          assert(renderCount === 1);
          assert(markup(root) === '<div title="ok">World</div>');

          ReactDOM.render(<ReactiveHello message={message} title="ok!!!" />, root);

          assert(renderCount === 2);
          assert(markup(root) === '<div title="ok!!!">World</div>');

        });

        it('ignores inactive value changes', function() {
          let message = atom('World');
          ReactDOM.render(<ReactiveHello message={message} title="ok" />, root);

          assert(renderCount === 1);
          assert(markup(root) === '<div title="ok">World</div>');

          let nextMessage = atom('NextWorld');
          ReactDOM.render(<ReactiveHello message={nextMessage} title="ok" />, root);

          assert(renderCount === 2);
          assert(markup(root) === '<div title="ok">NextWorld</div>');

          message.set('Nope');

          assert(renderCount === 2);
          assert(markup(root) === '<div title="ok">NextWorld</div>');

        });

        it('batches updates (via react and via derivable)', function() {
          let message = atom('World');
          ReactDOM.render(<ReactiveHello message={message} title="ok" />, root);

          assert(renderCount === 1);
          assert(markup(root) === '<div title="ok">World</div>');

          ReactDOM.unstable_batchedUpdates(() => {
            ReactDOM.render(<ReactiveHello message={message} title="ok!!!" />, root);
            message.set('!!!');
          });

          assert(renderCount === 2);
          assert(markup(root) === '<div title="ok!!!">!!!</div>');
        });

        it('batches updates (both via derivable)', function() {
          let message = atom('World');
          ReactDOM.render(<ReactiveHello message={message} title="ok" />, root);

          assert(renderCount === 1);
          assert(markup(root) === '<div title="ok">World</div>');

          ReactDOM.unstable_batchedUpdates(() => {
            message.set('oops');
            message.set('!!!');
          });

          assert(renderCount === 2);
          assert(markup(root) === '<div title="ok">!!!</div>');
        });

        it('batches updates (both via derivable, different)', function() {
          let message = atom('World');
          let x = atom('x');
          ReactDOM.render(<ReactiveHello message={message} title="ok" x={x} />, root);

          assert(renderCount === 1);
          assert(markup(root) === '<div title="ok" x="x">World</div>');

          ReactDOM.unstable_batchedUpdates(() => {
            x.set('oops');
            message.set('!!!');
          });

          assert(renderCount === 2);
          assert(markup(root) === '<div title="ok" x="oops">!!!</div>');
        });

      });
    });

  });
});

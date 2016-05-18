import React from 'react';
import { createHistory } from 'history';

import forms from './forms';

require("bootstrap/dist/css/bootstrap.css");

const history = createHistory();

export default class Examples extends React.Component {
  constructor(props) {
    super(props);

    this.handleHistoryChange = this.handleHistoryChange.bind(this);

    this.state = {
      selected: 'simple',
    };
  }

  componentDidMount() {
    this.unlistenHistory = history.listen(this.handleHistoryChange);
  }

  componentWillUnmount() {
    this.unlistenHistory();
  }

  handleHistoryChange({ hash }) {
    const fullPath = hash.replace('#', '');
    const pth = fullPath.split('-');
    if (pth && pth[0]) {
      this.setState({
        selected: pth[pth.length - 1],
      },() => window.scrollTo(0, 0));
    }
  }

  renderNavBarExamples() {
    const { selected } = this.state;

    return (
      <ul className="nav navbar-nav">
        {
          Object.keys(forms).map(exampleName => {
            return (
              <li key={ exampleName }>
                <a href={`#${exampleName}`}
                  className={ selected === exampleName ? 'selected' : '' }
                >
                  { forms[exampleName].title }
                </a>
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    const { selected } = this.state;
    const { Component, title, description } = forms[selected];

    return (
      <div>
        <div>
          <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              { this.renderNavBarExamples() }
            </div>
          </nav>

          <div className="container">
            <h2> { title } </h2>
            <p dangerouslySetInnerHTML={{ __html: description }} />
            <div className="Example">
              <div className="Example-Result">
                <Component />
              </div>
              <div className="Example-Code">
                <pre>
                  <code className="language-jsx">
                    { require('!raw!./forms/' + '/' + Component.name + '.js') }
                  </code>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

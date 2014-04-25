/**
 * @jsx React.DOM
 */

(function() {

var cx               = React.addons.classSet;
var cloneWithProps   = React.addons.cloneWithProps;

window.ShowValue = React.createClass({

  propTypes: {
    children: React.PropTypes.component.isRequired
  },

  getInitialState: function() {
    return {
      value: this.props.children.props.value,
      validation: this.props.children.props.validation,
      serializedValue: this.props.children.props.serializedValue,
      showDebugInfo: false
    };
  },

  onUpdate: function(value, validation, serializedValue) {
    var nextState = {
      validation: validation,
      serializedValue: serializedValue
    };

    if (validation.isSuccess) {
      nextState.value = value;
    }

    this.setState(nextState);
  },

  toggleDebugInfo: function() {
    this.setState({showDebugInfo: !this.state.showDebugInfo});
  },

  render: function() {
    var props = {
      value: this.state.value,
      validation: this.state.validation,
      serializedValue: this.state.serializedValue,
      onUpdate: this.onUpdate
    };

    var horizontal = this.props.horizontal;

    return this.transferPropsTo(
      <div className={cx({ShowValue: true, row: horizontal})}>

        <div className={cx({ShowValueComponent: true, 'col-md-6': horizontal})}>
          <p className="text">Component:</p>
          {cloneWithProps(this.props.children, props)}
        </div>

        <div className={cx({ShowValueValue: true, 'col-md-6': horizontal})}>
          <div className="ShowDebugInfoToggle">
            <label>
              <input
                type="checkbox"
                checked={this.state.showDebugInfo}
                onChange={this.toggleDebugInfo} /> Show debug info
            </label>
          </div>
          <p className="text">Value:</p>
          <pre className="value">
            {this.state.value === undefined ?
              'null' :
              JSON.stringify(this.state.value, undefined, 2)}
          </pre>
          {this.state.showDebugInfo &&
            <div className="DebugInfo">
              <p className="text">Serialized value:</p>
              <pre className="value">
                {this.state.serializedValue === undefined ?
                  'null' :
                  JSON.stringify(this.state.serializedValue, undefined, 2)}
              </pre>
              <p className="text">Validation:</p>
              <pre className="value">
                {this.state.validation === undefined ?
                  'null' :
                  JSON.stringify(this.state.validation, undefined, 2)}
              </pre>
            </div>}
        </div>
      </div>
    );
  }
});

})();

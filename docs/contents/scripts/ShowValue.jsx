/**
 * @jsx React.DOM
 */

(function() {

var cx               = React.addons.classSet;
var cloneWithProps   = React.addons.cloneWithProps;

window.ShowValue = React.createClass({

  propTypes: {
    children: React.PropTypes.component.isRequired,
    onUpdate: React.PropTypes.bool
  },

  getInitialState: function() {
    return {value: this.props.children.props.value};
  },

  onChange: function(value) {
    this.setState({value: value});
  },

  render: function() {
    var props = {value: this.state.value};

    if (this.props.onUpdate) {
      props.onUpdate = this.onChange;
    } else {
      props.onChange = this.onChange;
    }

    var horizontal = this.props.horizontal;

    return this.transferPropsTo(
      <div className={cx({ShowValue: true, row: horizontal})}>
        <div className={cx({ShowValueComponent: true, 'col-md-6': horizontal})}>
          <p className="text">Component:</p>
          {cloneWithProps(this.props.children, props)}
        </div>
        <div className={cx({ShowValueValue: true, 'col-md-6': horizontal})}>
          <p className="text">Current value:</p>
          <pre className="value">
            {this.state.value === undefined ?
              'null' :
              JSON.stringify(this.state.value, undefined, 2)}
          </pre>
        </div>
      </div>
    );
  }
});

})();

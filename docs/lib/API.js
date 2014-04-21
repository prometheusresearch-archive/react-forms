var APIDoc = React.createClass({

  render: function() {
    var typeClassName = cx('label', this.props.typeClassName);
    return this.transferPropsTo(
      <Section className="APIDoc">
        <Column className="sig" w="1">
          <span className={typeClassName}>{this.props.type}</span>
        </Column>
        <Column className="sig" w="4">
          <Code>{this.props.sig}</Code>
        </Column>
        <Column className="description" w="7">
          <p>{this.props.children}</p>
        </Column>
      </Section>
    );
  }
});

var Method = React.createClass({

  render: function() {
    return this.transferPropsTo(
      <APIDoc type="method" typeClassName="label-warning" className="Method">
        {this.props.children}
      </APIDoc>
    );
  }
});

var Prop = React.createClass({

  render: function() {
    return this.transferPropsTo(
      <APIDoc type="prop" typeClassName="label-success" className="Prop">
        {this.props.children}
      </APIDoc>
    );
  }
});

var Context = React.createClass({

  render: function() {
    return this.transferPropsTo(
      <APIDoc type="context" typeClassName="label-info" className="Context">
        {this.props.children}
      </APIDoc>
    );
  }
});


var Mixin = React.createClass({

  render: function() {
    return this.transferPropsTo(
      <APIDoc type="mixin" typeClassName="label-primary" className="Mixin">
        {this.props.children}
      </APIDoc>
    );
  }
});

var API = React.createClass({

  render: function() {
    return this.transferPropsTo(
      <Section className="API">
        {this.props.children}
      </Section>
    );
  }
});

module.exports = {API, APIDoc, Method, Prop, Context, Mixin};

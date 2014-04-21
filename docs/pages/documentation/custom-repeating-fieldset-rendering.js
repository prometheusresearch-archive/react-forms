/**
 * @jsx React.DOM
 */
'use strict';

module.exports = React.createClass({

  render: function() {
    return (
      <Demo name="Custom repeating fieldset rendering">
        <Section>
          <Column>
            <p>
              Similar to customization of fieldset rendering you might want to
              customize repeating fieldsets which renders <code>List</code>
              schemas.
            </p>
            <p>
              There's <code>RepeatingFieldsetMixin</code> for that which
              provides <code>items()</code> method which returns a list of form
              fields for each item in the value.
            </p>
            <p>
              There are also <code>addItem()</code> and
              <code>removeItem(idx)</code> methods which add and remove item by
              index correspondingly. You would want to use them to add controls
              to repeating fieldsets.
            </p>
          </Column>
          <Column>
            <Code>{`
              var SpecialRepeatingFieldset = React.createClass({
                mixins: [forms.RepeatingFieldsetMixin],

                render: function() {
                  return (
                    <div>
                      {this.items()}
                      <button onClick={this.addItem}>Add</button>
                    </div>
                  )
                }
              })
            `}</Code>
          </Column>
        </Section>
      </Demo>
    );
  }
});

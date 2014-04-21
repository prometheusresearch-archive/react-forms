'use strict';

var React             = require('react');
var merge             = require('react/lib/merge');
var cx                = require('react/lib/cx');
var Demo              = require('../lib/Demo');
var Section           = require('../lib/Section');
var Column            = require('../lib/Column');
var Code              = require('../lib/Code');
var ShowValue         = require('../lib/ShowValue');

var forms             = require('react-forms');

var schema            = forms.schema;
var Message           = forms.Message;
var Schema            = schema.Schema;
var List              = schema.List;
var Property          = schema.Property;

var INSTRUMENT = {
    "id": "urn:test-instrument",
    "version": "1.1",
    "title": "My Instrument Title",
    "record": [
        {
            "id": "q_text",
            "type": "text"
        },
        {
            "id": "q_int",
            "type": "integer"
        }
    ]
};

var FORM = {
    "instrument": {
        "id": "urn:test-instrument",
        "version": "1.1",
    },
    "defaultLocalization": "en",
    "title": {
        "en": "Our Test Form",
        "fr": "Ma grande forme"
    },
    "pages": [
        {
            "id": "page1",
            "elements": [
                {
                    "type": "text",
                    "options": {
                        "text": {
                            "en": "this is my cool text",
                            "fr": "this is my french text"
                        }
                    }
                },
                {
                    "type": "question",
                    "options": {
                        "fieldId": "q_text",
                        "text": {
                            "en": "What is your favorite word?",
                            "fr": "Quel est votre mot préféré?"
                        }
                    }
                }
            ]
        },
        {
            "id": "page2",
            "elements": [
                {
                    "type": "text",
                    "options": {
                        "text": {
                            "en": "hi mom"
                        }
                    }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "question",
                    "options": {
                        "fieldId": "q_int",
                        "text": {
                            "en": "What is your favorite number?"
                        }
                    }
                }
            ]
        }
    ]
};

var Localized = React.createClass({

  contextTypes: {
    localization: React.PropTypes.string,
    defaultLocalization: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {component: React.DOM.div};
  },

  render: function() {
    var localization = (
      this.context.localization ||
      this.context.defaultLocalization ||
      'en'
    );
    var text = this.props.children[localization] || this.props.children;
    return this.transferPropsTo(this.props.component(null, text));
  }
});

var Field = React.createClass({
  mixins: [forms.FieldMixin],

  render: function() {
    var schema = this.schema();
    var validation = this.validation();

    var className = cx({
      'react-forms-field': true,
      'invalid': validation.isFailure
    });

    var input = this.renderInputComponent();

    return (
      <div className={className}>
        {this.props.text &&
          <Localized component={React.DOM.label}>{this.props.text}</Localized>}
        {this.transferPropsTo(input)}
        {validation.isFailure &&
          <Message>{validation.validation.failure}</Message>}
      </div>
    );
  }
});

var Page = React.createClass({
  mixins: [forms.FieldsetMixin],

  render: function() {
    var elements = this.props.page.elements.map((el, idx) => {
      switch (el.type) {
        case 'divider':
          return <hr key={idx} className="Divider" />;
        case 'text':
          return <Localized component={React.DOM.p} key={idx} className="Text">{el.options.text}</Localized>;
        case 'question':
          return <Field key={idx} text={el.options.text} name={el.options.fieldId} />
        default:
          invariant(
            false,
            "don't know how to handle element of type %s", el.type
          );
      }
    });

    return <div className="Page">{elements}</div>;
  }
});

var PaginatedFieldset = React.createClass({
  mixins: [forms.FieldsetMixin],

  getInitialState: function() {
    return {page: 0};
  },

  nextPage: function() {
    var page = Math.min(this.props.pages.length - 1, this.state.page + 1)
    return this.setState({page});
  },

  prevPage: function() {
    var page = Math.max(0, this.state.page - 1)
    return this.setState({page});
  },

  render: function() {
    var schema = this.schema();
    var page = this.props.pages[this.state.page];
    var hasNext = this.state.page < this.props.pages.length - 1;
    var hasPrev = this.state.page > 0;
    return (
      <div className="PaginatedFieldset">
        <Page page={page} />
        {hasPrev &&
          <button type="button" onClick={this.prevPage} className="btn prev-page">Prev</button>}
        {hasNext &&
          <button type="button" onClick={this.nextPage} className="btn next-page">Next</button>}
      </div>
    );
  }
});

var Form = React.createClass({
  mixins: [forms.FormMixin],

  childContextTypes: {
    localization: React.PropTypes.string,
    defaultLocalization: React.PropTypes.string
  },

  getChildContext: function() {
    return {
      localization: this.props.localization,
      defaultLocalization: this.props.form.defaultLocalization
    };
  },

  render: function() {
    return (
      <form>
        <Localized component={React.DOM.h1}>{this.props.form.title}</Localized>
        <PaginatedFieldset pages={this.props.form.pages} />
      </form>
    );
  }
});

function createSchema(instrument) {
  var children = instrument.record.map((rec) => {
    switch (rec.type) {
      case 'integer':
        return Property({name: rec.id, type: 'number'});
      default:
        return Property({name: rec.id});
    }
  });
  return <Schema>{children}</Schema>;
}

module.exports = React.createClass({

  render: function() {
    return (
      <Demo className="FormDemo InstrumentDemo" name={this.props.name}>
        <ShowValue onUpdate horizontal>
          <Form form={FORM} schema={createSchema(INSTRUMENT)} />
        </ShowValue>
      </Demo>
    );
  }
});

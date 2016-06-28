import 'normalize.css/normalize.css';

import * as React from 'react';
import * as ReactiveReactForms from '../src/reactive';
import * as ReactForms from '../src';
import * as s from './Site.rcss';

let schema = {
  type: 'object',
  required: ['lastName'],
};

function SubmitButton({formValue}) {
  let disabled = formValue.completeErrorList.length > 0;
  return (
    <button disabled={disabled}>
      Submit
    </button>
  );
}

let ReactiveSubmitButton = ReactiveReactForms.withFormValue(SubmitButton);

class ReactiveForm extends React.Component {

  constructor(props) {
    super(props);
    this.formValue = ReactiveReactForms.createValue({schema});
    this.formValue._value.react(value => {
      console.log(JSON.stringify(value, null, 2));
    });
  }

  render() {
    console.log('ReactiveForm.render()');
    return (
      <ReactiveReactForms.Fieldset formValue={this.formValue}>
        <ReactiveReactForms.Field label="First name:" select="firstName" />
        <ReactiveReactForms.Field label="Last name:" select="lastName" />
        <ReactiveSubmitButton />
      </ReactiveReactForms.Fieldset>
    );
  }
}

class Form extends React.Component {

  constructor(props) {
    super(props);
    let formValue = ReactForms.createValue({
      schema,
      onChange: this.onChange
    });
    this.state = {formValue};
  }

  onChange = (formValue) => {
      console.log(JSON.stringify(value, null, 2));
    this.setState({formValue});
  };

  render() {
    return (
      <ReactForms.Fieldset formValue={this.state.formValue}>
        <ReactForms.Field label="First name:" select="firstName" />
        <ReactForms.Field label="Last name:" select="lastName" />
        <SubmitButton formValue={this.state.formValue} />
      </ReactForms.Fieldset>
    );
  }
}

function ToCSectionItem({path, section}) {
  let padding = (section.depth - 1) * 15;
  return (
    <s.ToCSectionItemRoot style={{paddingLeft: padding}}>
      <s.ToCSectionItemLink href={path + '#' + section.name}>
        {section.title}
      </s.ToCSectionItemLink>
    </s.ToCSectionItemRoot>
  );
}

function ToCPageItem({route: {path, meta}}) {
  path = '/' + (path || '');
  let title = meta.data.title || meta.model.title;
  let toc = meta.model.toc
    .filter(section => section.depth > 1 && section.depth < 4)
    .map(section =>
      <ToCSectionItem
        key={section.name}
        path={path}
        section={section}
        />
    );
  return (
    <s.ToCPageItemRoot>
      <s.ToCPageItemLink href={path}>
        {title}
      </s.ToCPageItemLink>
      <s.ToCPageItemSectionList>
        {toc}
      </s.ToCPageItemSectionList>
    </s.ToCPageItemRoot>
  );
}

function ToC({route}) {
  let routes = [route.indexRoute]
    .concat(route.childRoutes)
    .filter(Boolean);
  let pages = routes.map(route =>
    <ToCPageItem
      key={route.path || '/'}
      route={route}
      />
  );
  return (
    <div>
      {pages}
    </div>
  );
}

function Sidebar({route}) {
  return (
    <s.SidebarRoot>
      <s.SidebarWrapper>
        <s.SidebarTitle>Table Of Contents</s.SidebarTitle>
        <ToC route={route} />
      </s.SidebarWrapper>
    </s.SidebarRoot>
  );
}

export default function Site({children, routes, ...props}) {
  console.log(routes);
  return (
    <s.Base>
      <Sidebar route={routes[0]} />
      <s.Main>
        <s.Header>
          <s.HeaderTitle>React Forms</s.HeaderTitle>
          <s.HeaderSub>Form rendering and validation toolkit for React</s.HeaderSub>
        </s.Header>
        <s.Content>
          {children}
        </s.Content>
      </s.Main>
    </s.Base>
  );
}

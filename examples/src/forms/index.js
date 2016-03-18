import Simple from './Simple';
import Validation from './Validation';
import CustomField from './CustomField';
import Reusable from './Reusable';

export default {
  simple: {
    title: 'Simple',
    description: 'simple form',
    Component: Simple,
  },
  validation: {
    title: 'Validation',
    description: 'form with json schema validation',
    Component: Validation,
  },
  customField: {
    title: 'Customizing form fields',
    description: `All components in React Forms conform to [React Stylesheet][] API. That means
      that for injecting customization one needs "react-stylesheet" package to be
      installed:

        % npm install react-stylesheet'`,
    Component: CustomField,
  },
  reusable: {
    title: 'Pattern for reusable forms',
    description: '',
    Component: Reusable,
  },
};

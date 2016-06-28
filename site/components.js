import React from 'react';
import * as s from './components.rcss';

export {
  Root,
  Code, InlineCode,
  Paragraph,
  Link
} from './components.rcss';

export function Heading({children, name, ...props}) {
  return (
    <s.Heading {...props}>
      {children}
      <s.HeadingRef name={name} />
    </s.Heading>
  );
}

import React from 'react';
import * as s from './Note.rcss';

export default function Note({line, children}) {
  return (
    <s.NoteRoot>
      <s.NoteHeader>
        <s.NoteIcon>NOTE</s.NoteIcon>
        <s.NoteTitle>{line}</s.NoteTitle>
      </s.NoteHeader>
      <s.NoteContent>{children}</s.NoteContent>
    </s.NoteRoot>
  );
}

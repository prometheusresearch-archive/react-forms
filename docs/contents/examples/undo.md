---
template: markdown.js
scripts:
  - "scripts/ShowValue.js"
  - "scripts/examples/undo.js"
---

# Form with undo/redo stack

This examples demonstrates how to implement undo/redo functionality with React
Forms. Because React Forms keeps its state (value and validation info) immutable
it is possible to make a state snapshot at any time with almost no overhead.

This particular examples only make a snapshot before destructive operations such
as adding/removing a fieldset in repeating fieldset.

<div id="example"></div>

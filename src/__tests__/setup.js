/**
 * @copyright 2015 Prometheus Research, LLC
 */

import assert     from 'power-assert';
import jsdom      from 'jsdom';
import TestUtils  from 'react/lib/ReactTestUtils';

let document = jsdom.jsdom('<!doctype html><html><body></body></html>');
let window = document.defaultView;

global.assert = assert;
global.document = document;
global.window = window;
global.TestUtils = TestUtils;

propagateToGlobal(window);

function propagateToGlobal(window) {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) {
      continue;
    }
    if (key in global) {
      continue;
    }
    global[key] = window[key];
  }
}

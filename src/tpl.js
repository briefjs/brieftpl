/* div({ id: 'foo', name: 'bar' })`Hello!`
  -> `h('div', { id: 'foo', name : 'bar' }, 'Hello!');`
*/

import adapter from './adapter';

export function renderTag(textNodes, ...sub) {
  return [...sub.map((el, i) => {
    if(typeof el === 'function') {
      el = el``;
    }
    return [textNodes[i], el];
  }), textNodes.slice(-1)].reduce((a, b) => {
    if(Array.isArray(b)) {
      return [...a, ...b];
    }
    return [...a, b];
  }, []);
}

export function tagged(nodeName, selfClosing = false) {
  return function (...args) {
    if(Array.isArray(args[0])) { // no attributes
      return adapter.createElement(nodeName, {}, ...renderTag(...args));
    }
    const attrs = args[0];
    return function (...args) {
      return adapter.createElement(nodeName, attrs, ...renderTag(...args));
    };
  };
}

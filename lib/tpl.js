function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* div({ id: 'foo', name: 'bar' })`Hello!`
  -> `h('div', { id: 'foo', name : 'bar' }, 'Hello!');`
*/
import adapter from './adapter';

function getChildren(textNodes) {
  for (var _len = arguments.length, sub = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sub[_key - 1] = arguments[_key];
  }

  return [].concat(_toConsumableArray(sub.map(function (el, i) {
    if (typeof el === 'function') {
      el = el(_templateObject());
    }

    return [textNodes[i], el];
  })), [textNodes.slice(-1)]).reduce(function (a, b) {
    if (Array.isArray(b)) {
      return [].concat(_toConsumableArray(a), _toConsumableArray(b));
    }

    return [].concat(_toConsumableArray(a), [b]);
  }, []);
}

export default function taged(nodeName) {
  var selfClosing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function () {
    if (Array.isArray(arguments.length <= 0 ? undefined : arguments[0])) {
      // no attributes
      return adapter.createElement.apply(adapter, [nodeName, {}].concat(_toConsumableArray(getChildren.apply(void 0, arguments))));
    }

    var attrs = arguments.length <= 0 ? undefined : arguments[0];
    return function () {
      return adapter.createElement.apply(adapter, [nodeName, attrs].concat(_toConsumableArray(getChildren.apply(void 0, arguments))));
    };
  };
}
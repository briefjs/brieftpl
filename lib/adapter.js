function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function parseAttributes(attrs) {
  var ret = Object.entries(attrs).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (typeof value === 'function') {
      var handler = "e_".concat(Math.random().toString(36).slice(2));
      window[handler] = value;
      return "".concat(key, "=\"").concat(handler, "()\"");
    }

    if (value && _typeof(value) === 'object') {
      value = Object.entries(value).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        return "".concat(key, ":").concat(value, ";");
      }).join('');
    }

    return "".concat(key, "=\"").concat(value, "\"");
  }).join(' ');
  return ret !== '' ? " ".concat(ret) : '';
}

function createElement(nodeName, attributes) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return "<".concat(nodeName).concat(parseAttributes(attributes), ">").concat(children.join(''), "</").concat(nodeName, ">");
}

var adapter = {
  parseAttributes: parseAttributes,
  createElement: createElement
};
export default adapter;
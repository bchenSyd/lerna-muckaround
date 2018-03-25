'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));
var React = _interopDefault(require('react'));
var ThemeProvider = _interopDefault(require('@lernatest/gel-themes'));
var styled = _interopDefault(require('styled-components'));

function getName() {
    return _.times(3).reduce(function (acc, val) {
        return acc + ' ' + val;
    });
}

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n  height: 300px;\n'], ['\n  height: 300px;\n']),
    _templateObject2 = taggedTemplateLiteral(['\n  color: ', ';\n'], ['\n  color: ', ';\n']);

// test object-rest-spread is supported (a babel stage3 feature, not es6/ES2015 standard)
var _a$b$c = { a: 1, b: 2, c: 3 },
    rest = objectWithoutProperties(_a$b$c, ['a']);
// test styled-component

var Wrapper = styled.div(_templateObject);
// test internal package dependency
var theme = ThemeProvider.getTheme();
var Button = styled.button(_templateObject2, theme.primaryColor);
// test internal module
var name = getName();

var FancyButton = function FancyButton() {
  return React.createElement(
    'button',
    null,
    'fancy button $',
    name
  );
};

module.exports = FancyButton;

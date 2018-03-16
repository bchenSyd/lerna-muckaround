'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var _ = _interopDefault(require('lodash'));

var label = _.times(3).reduce(function (acc, val) {
  return acc + ' ' + val;
});
var FancyButton = function FancyButton() {
  return React.createElement(
    'button',
    null,
    'fancy button $',
    label
  );
};

module.exports = FancyButton;

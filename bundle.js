'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));
var React = _interopDefault(require('react'));

function getName() {
    return _.times(3).reduce(function (acc, val) {
        return acc + ' ' + val;
    });
}

var FancyButton = function FancyButton() {
  return React.createElement(
    'button',
    null,
    'fancy button $',
    getName
  );
};

module.exports = FancyButton;

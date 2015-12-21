var React = require('react');
var ReactDOM = require('react-dom');
var HelloWorld = require('./message');

var appDiv = document.getElementById('app');
ReactDOM.render(<HelloWorld />, appDiv);

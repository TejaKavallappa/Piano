var Dispatcher = require('./dispatcher/Dispatcher');
var React = require('react'),
    ReactDOM = require('react-dom'),
    Note = require('./util/Note'),
    KeyBoard = require('./components/keyboard'),
    KeyListener = require('./util/KeyListener');

var Tones = require('./constants/Tones');

document.addEventListener("DOMContentLoaded", function() {

  ReactDOM.render(<KeyBoard />,
  document.getElementById('piano'));
});

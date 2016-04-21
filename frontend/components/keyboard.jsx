var React = require('react'),
    ReactDOM = require('react-dom'),
    KeyStore = require('../stores/KeyStore'),
    Tones = require('../constants/Tones'),
    PianoKey = require('./pianoKey');

var KeyBoard = React.createClass({
  getInitialState: function(){
    return {tones: Tones};
  },



  render: function(){
    var tones = this.state.tones;

    var keys = Object.keys(tones).map(function(keyVal, index) {
        return <PianoKey className="pianoKey" keyVal={keyVal} />
    });

    return (
      <div>
        {keys}
      </div>);
  }
});

module.exports = KeyBoard;

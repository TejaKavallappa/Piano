var React = require('react');
var Track = require('../utils/Track');
var KeyStore = require('../stores/KeyStore');

var Recorder = React.createClass({

  getInitialState: function(){
    return {isRecording: false, track: []};
  },

  componentDidMount: function(){
    KeyStore.addListener(Track.addNotes(KeyStore.getKeys));
  },

  render: function(){
    return (
      <div>
        <button onClick={Track.startRecording}>Start</button>
        <button onClick={Track.stopRecording}>Stop</button>
        <button onClick={Track.play}>Play</button>
      </div>);
  }


});

module.exports = Recorder;

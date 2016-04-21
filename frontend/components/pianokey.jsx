var React = require('react');
var KeyStore = require('../stores/KeyStore');

var PianoKey = React.createClass({

  getInitialState: function() {
    return {played: false};
  },

  componentDidMount: function() {
    KeyStore.addListener(this._highlightKey);
  },

  _highlightKey: function(){
    console.log("PianoKey _highlightKey called");
    console.log("key val:" + this.props.keyVal);
    console.log("currentKey:" + KeyStore.getCurrentKey());
    if (this.props.keyVal === KeyStore.getCurrentKey()){
      this.setState({played: !this.state.played});
    }
  },

  render: function() {
    var played = this.state.played ? "played-key" : "non-played-key";
    console.log(this.props.keyVal);
    return(
      <div id={played} key={this.props.keyVal}>
        {this.props.keyVal}
      </div>
    );
  }
});

module.exports = PianoKey;

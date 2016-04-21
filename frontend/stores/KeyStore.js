var AppDispatcher = require('../dispatcher/Dispatcher'),
   Store = require('flux/utils').Store;
var Tones = require('../constants/Tones');
var Note = require('../util/Note');

var _keysPlaying = [];
var KeyStore = new Store(AppDispatcher);

var currentKey = undefined;

var _keyMap = {
  65: "C",
  83: "D#",
  68: "F",
  70: "G",
  71: "A#",
  81: "C",
  87: "D",
  69: "E",
  82: "F",
  84: "G",
  89: "A",
  85: "B",
  73: "C^"
};

KeyStore.startNote = function(keyCode) {
  if (_keysPlaying.indexOf(keyCode) === -1){
    var freq = Tones[_keyMap[keyCode]];
    var note = new Note(freq);
    note.start();
    _keysPlaying.push(note);
  }
};

KeyStore.endNote = function(keyCode) {
  var freq = Tones[_keyMap[keyCode]];
  KeyStore.createSilence();
};

KeyStore.createSilence = function() {
  _keysPlaying.forEach(function(note){
    note.stop();
  });
};

KeyStore.highlightKey = function(keyCode) {
  // var key is a letter, e.g. "A"
  var key = _keyMap[keyCode];
  currentKey = key;
  console.log("new current key: " + currentKey);
  console.log("KeyStore.highlightKey called");
  KeyStore.__emitChange();
};

KeyStore.getCurrentKey = function() {
  return currentKey;
};

KeyStore.getCurrentNotes = function(){
  return _keysPlaying;
};

KeyStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case 'START':
    KeyStore.startNote(payload.keyCode);
    break;
    case 'END':
    KeyStore.endNote(payload.keyCode);
    break;
    case 'HIGHLIGHT':
    console.log("KeyStore called");
    KeyStore.highlightKey(payload.keyCode);
    break;
  }
};

module.exports = KeyStore;

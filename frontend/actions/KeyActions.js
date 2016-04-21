var AppDispatcher = require('../dispatcher/Dispatcher');

var KeyActions = {
  startNote: function(keyCode) {
    AppDispatcher.dispatch({
      actionType: "START",
      keyCode: keyCode
    });
  },
  endNote: function(keyCode){
    AppDispatcher.dispatch({
      actionType: "END",
      keyCode: keyCode
    });
  },

  highlightKey: function(keyCode){
    console.log("KeyAction called");
    AppDispatcher.dispatch({
      actionType: "HIGHLIGHT",
      keyCode: keyCode
    });
  },

  updateKeysPlaying: function(currentNote){
    AppDispatcher.dispatch({
      actionType: "UPDATE_KEYS",
      currentNote: currentNote
    });
  }

};



module.exports = KeyActions;

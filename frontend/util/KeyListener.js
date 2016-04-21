var KeyActions = require('../actions/KeyActions');


document.addEventListener("keydown", function() {
  event.preventDefault();
  var keyCode = event.keyCode;
  console.log("keydown");
  KeyActions.startNote(keyCode);

  KeyActions.highlightKey(keyCode);
});

document.addEventListener("keyup", function() {
  event.preventDefault();

  var keyCode = event.keyCode;
  console.log("keyup");
  KeyActions.endNote(keyCode);

  KeyActions.highlightKey(keyCode);

});

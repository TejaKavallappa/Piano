
var Track = function(attributes){
  this.roll = [] || attributes[roll];
  this.name = "" || attributes[name];
};

Track.prototype.startRecording = function(){
  this.roll = [];
  this.startTime = Date.now();
};

Track.prototype.addNotes = function(notes) {
  var timeSlice = Date.now() - this.startTime;
  var obj = {timeSlice: timeSlice, notes: notes};
  this.roll.push(obj);
};

Track.prototype.stopRecording = function(){
  this.addNotes([]);
};

Track.prototype.play = function(){
  if (this.interval){
    return;
  }
  var playbackStartTime = Date.now();
  var currentNote = 0;
  var intervalId = setInterval(function(){
    if (currentNote < this.roll.length && currentNote >= 0){
      if (Date.now() - playbackStartTime > this.roll[currentNote].timeSlice){
        //Use KeyAction to update KeyStore
        currentNote++;
      }
    }
  }, 10);
  clearInterval(intervalId);
}

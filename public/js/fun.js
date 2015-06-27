var ref = new Firebase('https://luminous-torch-9597.firebaseio.com');

ref.on("child_added", function(snapshot) {
  var action = snapshot.val();
  if (action.name == "Michael") {
    var room = action.room.toLowerCase().replace(' ', '-')
    $('h1, .room').hide()
    $('#' + room).show()
  }
});
var ref = new Firebase('https://luminous-torch-9597.firebaseio.com');

ref.on("child_added", function(snapshot) {
  var action = snapshot.val();
  $('#list').append('<li><strong>' + action.name + '</strong> is in the <strong>' + action.room + '</strong></li>')
});
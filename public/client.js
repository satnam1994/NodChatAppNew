$(document).ready(function() { 
 
 // initializing socket, connection to server
  var socket = io.connect('http://localhost:7777');
  socket.on('connect', function(data) {
      socket.emit('join', 'Hello server from client');
  });

  // listener for 'thread' event, which updates messages
	socket.on('thread', function(data) {
		var login_user = getCookie("login_user");
		$('#thread').append(login_user + '<li  class="list-group-item">' + data + '</li>');

		function getCookie(cname) {
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for(var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		}
	});
	
	socket.on('login_thread', function(data) {
		console.log(data);
	});
	
	// sends message to server, resets & prevents default form action
	$('#messageForm').on('submit', function (e) {
		var message = $('#message').val();
		if(message != ""){ 
			socket.emit('messages', message);
			this.reset();
			return false;
		}
	});
});  
   
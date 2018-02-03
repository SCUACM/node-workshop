var socket = io();

socket.on('message', function(msg) {
	$('#messages').append('<li>' + msg + '</li>')
})

$('form').submit(function() {
	socket.emit('message', $('#m').val());
	$('#m').val('');

	return false;
});

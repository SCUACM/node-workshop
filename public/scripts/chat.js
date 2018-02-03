// TODO:
// [ ] Escape HTML in messages

var socket = io()

// listen for messages and display them in list
socket.on('message', function(msg) {
	$('#messages').append('<li>' + msg + '</li>')
})

// Message submission handler
$('form').submit(function() {
	socket.emit('message', $('#m').val()) // send message to server

	$('#m').val('')

	return false
})

// Events

// TODO...

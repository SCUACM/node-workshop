// FRONTEND (CLIENT) CODE

// TODO:
// [ ] Disallow sending of blank messages
// [X] Escape HTML in messages

var server = io()

// listen for messages and display them in list
server.on('message', function(msg) {
	$('#messages').append('<li>' + escapeHtml(msg) + '</li>')
})

// Message submission handler
$('form').submit(function() {
	server.emit('message', $('#m').val())

	// Reset form so we can enter more messages
	$('#m').val('')

	return false
})

// Events

// TODO...

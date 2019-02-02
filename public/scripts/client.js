// FRONTEND (CLIENT) CODE

// TODO:
// [X] Disallow sending of blank messages
// [X] Escape HTML in messages

var server = io()

var nickname = ''
do {
	nickname = prompt('Enter a nickname:', 'nickname here')
} while (nickname == null)

server.emit('nickname', nickname)

// listen for messages and display them in list
server.on('message', function(nickname, msg) {
	$('#messages')
		.append(
			'<li>' +
			escapeHtml(nickname) +
			': ' +
			escapeHtml(msg) +
			'</li>'
		)
})

server.on('nickname', function(oldNick, newNick) {
	$('#messages')
		.append(
			'<li>' +
			escapeHtml(oldNick) +
			' changed nickname to ' +
			escapeHtml(newNick) +
			'</li>'
		)
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

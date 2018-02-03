// TODO:
// Broadcast a message to connected users when someone connects or disconnects
// Add support for nicknames
// Don’t send the same message to the user that sent it himself. Instead, append the message directly as soon as he presses enter.
// Add “{user} is typing” functionality
// Show who’s online
// Add private messaging
// Share your improvements!


module.exports = function(http) {
	var io = require('socket.io')(http);

	io.on('connection', function(socket) {
		console.log('a user connected :)')

		socket.on('message', function(msg) {
			io.emit('message', msg)
		})

		socket.on('disconnect', function() {
			console.log('a user disconnected :(')
		})
	});

	return io;
}

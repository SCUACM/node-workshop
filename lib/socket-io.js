// TODO:
// [ ] Broadcast a message to connected users when someone connects or disconnects
// [ ] Add support for nicknames
// [ ] Add “{user} is typing” functionality
// [ ] Show who’s online
// [ ] Add private messaging
// [ ] Share your improvements!

module.exports = function(http) {
	var io = require('socket.io')(http)

	io.on('connection', function(socket) {
		console.log('%s connected :)', socket.id)

		// TODO...

		socket.on('disconnect', function() {
			console.log('%s disconnected :(', socket.id)
		})
	})

	return io;
}

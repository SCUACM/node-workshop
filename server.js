var path = require('path')
var express = require('express')

// Set up Express web framework and HTTP web server
var app = express()
var http = require('http').Server(app)

// Allow our 'public' directory to be viewable
app.use(express.static(path.join(__dirname, './public')))

// Set up test route
app.route('/hello')
.get(function(req, res) {
	// Simple "Hello, world!"
	res.json('Hello, world!')
})

////////////////////////////////// Socket.IO ///////////////////////////////////

// TODO:
// [X] Broadcast a message to connected users when someone connects or disconnects
// [ ] Add a MOTD (Message of the Day)
// [X] Allow clients to choose a nickname
// [ ] Add “{user} is typing” functionality
// [ ] Show number of clients connected
// [ ] Add private messaging
// [ ] Add rate-limiting

// Set up socket.io
var io = require('socket.io')(http)

var clients = {}

// This function is run every time a new client connects
// It binds listeners to events coming from that client
io.on('connection', function(client) {
	var chatClient = { socket: client, nickname: client.id }

	// adds client to list of clients
	clients[client.id] = chatClient

	console.log('%s connected :)', chatClient.nickname)
	io.emit('message', 'New user: ' + chatClient.nickname)

	// listen for nickname change
	client.on('nickname', function(newNick) {
		if (newNick.trim() === '')
			return

		console.log('%s changed nickname to %s', chatClient.nickname, newNick)
		io.emit('nickname', chatClient.nickname, newNick)
		chatClient.nickname = newNick
	})

	// main message event
	client.on('message', function(msg) {
		if (msg.trim() === '') // check for blank messages
			return

		console.log('%s sent a message: %s', chatClient.nickname, msg)
		io.emit('message', chatClient.nickname, msg) // forward message to all connected users
	})

	client.on('disconnect', function() {
		console.log('%s disconnected :(', chatClient.nickname)
		io.emit('message', 'User left: ' + chatClient.nickname)

		delete clients[client.id]
	})
})

////////////////////////////////////////////////////////////////////////////////

// Start your engines!
var PORT = process.env.PORT || 5000
http.listen(PORT, function() {
	console.log('Listening on %s', PORT)
})

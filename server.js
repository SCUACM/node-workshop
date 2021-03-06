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
// [ ] Broadcast a message to connected users when someone connects or disconnects
// [ ] Add a MOTD (Message of the Day)
// [ ] Allow clients to choose a nickname
// [ ] Add “{user} is typing” functionality
// [ ] Show number of clients connected
// [ ] Add private messaging
// [ ] Add rate-limiting
// [ ] Admin dashboard and tools (view logs, statistics, ip ban, etc.)

// Set up socket.io
var io = require('socket.io')(http)

// This function is run every time a new client connects
// It binds listeners to events coming from that client
io.on('connection', function(client) {
	console.log('%s connected :)', client.id)

	// main message event
	client.on('message', function(msg) {
		console.log('%s sent a message: %s', client.id, msg)
		io.emit('message', msg) // forward message to all connected users
	})

	client.on('disconnect', function() {
		console.log('%s disconnected :(', client.id)
	})
})

////////////////////////////////////////////////////////////////////////////////

// Start your engines!
var PORT = process.env.PORT || 5000
http.listen(PORT, function() {
	console.log('Listening on %s', PORT)
})

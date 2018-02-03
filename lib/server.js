var express = require('express')
var path = require('path')
var PORT = process.env.PORT || 5000

var app = express()
var http = require('http').Server(app);

// Allow our 'public' directory to be viewable
app.use(express.static(path.join(__dirname, '../public')))

// Set up our pages
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs')

// Set up routes
app.use('/', require('./routes/index'))
app.use('/api', require('./routes/api'))

// Set up socket.io
var io = require('./socket-io')(http);

// Start your engines!
http.listen(PORT, function() {
	console.log('Listening on %s', PORT)
})

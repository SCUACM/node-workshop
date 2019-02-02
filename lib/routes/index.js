var router = require('express').Router()

// Render main index page (chat application)
router.route('/')
.get(function(req, res) {
	res.render('pages/index')
})

// Simple "Hello, world!"
router.route('/hello')
.get(function(req, res) {
	res.json('Hello, world!')
})

router.route('/')

module.exports = router

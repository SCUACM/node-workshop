var router = require('express').Router()

// Render main index page (chat application)
router.route('/')
.get(function(req, res) {
	res.render('pages/index')
})

router.route('/')

module.exports = router

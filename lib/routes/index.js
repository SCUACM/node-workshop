var router = require('express').Router()

router.route('/')
	.get(function(req, res, next) {
		// Render index page

		res.render('pages/index');
	});

router.route('/')

module.exports = router

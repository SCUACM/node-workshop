var router = require('express').Router()

router.route('/users')
	.get(function(req, res, next) {
		// return all active users
	});

// ...

module.exports = router

var router = require('express').Router()
var people = require('../../data/people.json')

// Simple "Hello, world!"
router.route('/hello')
.get(function(req, res) {
	// TODO...
})

// Search for people. Use URL query as search queries.
// Ex: http://localhost:5000/api/people?first_name=James should
// return people with first name that include the string "James"
router.route('/people')
.get(function(req, res) {
	// TODO...
})

module.exports = router

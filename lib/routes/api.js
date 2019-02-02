var router = require('express').Router()
var people = require('../../data/people.json')

// Search for people. Use URL query as search queries.
// Ex: http://localhost:5000/api/people?first_name=James should
// return people with first name that include the string "James"
router.route('/people')
.get(function(req, res) {
	// ?first_name=James ==> req.query = { 'first_name': 'James' }
	console.log(req.query)

	var searchResults = people.filter(function(person) {
		for (var key in req.query) {
			// If the key doesn't exist or if the person doesn't match the
			// query, then the person isn't a match
			if (!person[key] || person[key] != req.query[key]) {
				return false
			}
		}

		return true
	})

	res.render('pages/people', { results: searchResults })
})

module.exports = router

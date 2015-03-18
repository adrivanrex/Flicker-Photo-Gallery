'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	flicker = require('../../app/controllers/flicker.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/flicker')
		.get(users.requiresLogin,flicker.list);
};

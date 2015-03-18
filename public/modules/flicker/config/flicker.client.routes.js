'use strict';

// Setting up route
angular.module('flicker').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('listflicker', {
			url: '/flicker',
			templateUrl: 'modules/flicker/views/list-flicker.client.view.html'
		});
	}
]);
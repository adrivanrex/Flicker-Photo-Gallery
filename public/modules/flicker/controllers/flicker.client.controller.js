'use strict';

// Flicker controller
angular.module('flicker').controller('FlickerController', ['$http','$scope', '$stateParams', '$location', 'Authentication', 'Flicker',
	function($http,$scope, $stateParams, $location, Authentication, Flicker) {
		$scope.totalItems = 640;
		$scope.currentPage = 4;

		$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
		};

		$scope.pageChanged = function() {
		$log.log('Page changed to: ' + $scope.currentPage);
		};

		$scope.maxSize = 5;
		$scope.bigTotalItems = 1750;
		$scope.bigCurrentPage = 1;








		$scope.photos = [];
		$scope.currentPhoto = null;
		$scope.prevPhoto = null;
		$scope.nextPhoto = null;
		$scope.currentPhotoSrc = '';
		$scope.text = '';
		$scope.modalOpened = null;
		// Search

		$scope.search = function(text, page){
		var page = $scope.bigCurrentPage;
		var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9e82e65fb524e2e8fcb1ed12066ebe05&tags='+text+'&per_page=30&page='+page+'&format=json&nojsoncallback=1';
        console.log(url);
        $http.get(url).success(function(data){
        	console.log(data);
        	if(data.stat == 'ok'){
        	$scope.photos = data.photos;
            $scope.photos = data.photos.photo;
            $scope.currentPage = data.photos.page;
            $scope.pages = data.photos.pages;
            $scope.bigTotalItems = data.photos.total;
            //$scope.paginator();
            $scope.loading = false;

        	}
        	
        });

        
        	

	    }


	}
]);
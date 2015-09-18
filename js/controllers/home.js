//Home Controller - parent controller for home page

'use strict';

var app = app || {};

app.controller('HomeCtrl', function ($scope, YoutubeService, $sce, $location) {
	$scope.menuItems = global.menuItems;


	$scope.queryVideo = function(query){
		YoutubeService.queryVideo(query)
		.then(function(videos){
			//console.log(videos);
			$scope.videos = videos;
		});
	};

	$scope.queryVideo();
});
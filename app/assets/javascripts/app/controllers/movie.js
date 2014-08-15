angular.module('popcornApp.controllers')
.controller('MovieController', 
  function($scope, MoviesService, $routeParams, $sce) {
  console.log('movieController is booting in movie.js');
  $scope.movies = MoviesService.movies();
  console.log($routeParams);
  $scope.movie = _.find($scope.movies, 
    function(v) {
      return v.youtubeId == $routeParams.movie_id;
    });
  $scope.movie.youtubeUrl = $sce.trustAsResourceUrl("http://youtube.com/embed/" + $scope.movie.youtubeId + "?rel=0");
});
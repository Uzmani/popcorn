angular.module('popcornApp.controllers')
.controller('MovieController', 
  function($scope, MoviesController, $routeParams) {
  console.log('movieController is booting');
  $scope.movies = MoviesService.movies();
  console.log($routeParams);
});
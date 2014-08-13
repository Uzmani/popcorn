angular.module('popcornApp', [
     'ngRoute',
     'popcornApp.controllers',
     'popcornApp.services'
     ])
.config(function($routeProvider, $locationProvider) {
     $routeProvider
          .when('/movie/:movie_id',
          {
               contoller: 'MovieController',
               templateUrl: "/templates/movie.html"
          })
          .when('/',
          {
               controller: 'MoviesController',
               templateUrl: 'templates/movies.html'
          })
          .otherwise({redirectTo: '/'});
     $locationProvider.html5Mode(true);
});












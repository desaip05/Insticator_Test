'use strict';

// Declare app level module which depends on views, and components
angular.module('insticator', [
  'ngRoute',
  'insticator.widget',
  'insticator.results',
  'insticator.version',
  'insticator.services',
  'insticator.factories'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/widget'});
}]);

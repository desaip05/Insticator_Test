'use strict';

angular.module('insticator.results', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/results', {
    templateUrl: 'views/results.html',
    controller: 'resultsCtrl'
  });
}])

.controller('resultsCtrl', function($scope, $timeout, Results) {


	$scope.results = Results.getResults();
	$scope.results.percent = ($scope.results.rightAnswerCount/$scope.results.questionsAttempted)*100
	
});
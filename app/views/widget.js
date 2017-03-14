'use strict';

angular.module('insticator.widget', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/widget', {
    templateUrl: 'views/widget.html',
    controller: 'widgetCtrl'
  });
}])

.controller('widgetCtrl', function($scope, QuestionStore, $timeout, $location, Results) {
	$scope.questions;
	$scope.status;
	$scope.currQ;
    $scope.solvedQuestions = [];
    $scope.rightCount=0;
    $scope.class = "";
    $scope.optionSelected = function(selectedValue, index){

        // console.log($scope.questions);
        $scope.selected = index;
        if($scope.currQ.result.title===selectedValue){
            console.log("Right Answer");
            $scope.rightCount++;
        }else{
            console.log("Wrong Answer");
        }

        $scope.solvedQuestions.push($scope.currQ);

        $scope.class = "questionViewAnimateOut";
        if($scope.solvedQuestions.length<5){
            $timeout(function(){
                $scope.selected = -1;
                $scope.pickNextQuestion();
                $scope.class = "questionViewAnimateIn";
            }, 500);
            
        } else{
            $timeout(function(){
                Results.putResults($scope.solvedQuestions.length, $scope.rightCount);
                $location.path('/results')
                $scope.class = "questionViewAnimateIn";
            }, 500);
            console.log("You answered " + $scope.rightCount + " out of 5 questions correctly");
        }  
    };

    $scope.pickNextQuestion = function (){

        while(!$scope.currQ || $scope.solvedQuestions.indexOf($scope.currQ) !== -1){
           $scope.currQ = $scope.questions[Math.floor(Math.random() * $scope.questions.length)];
        }
    };

	QuestionStore.getQuestions()
		.success(function (_questions) {
            $scope.questions = _questions;
            $scope.pickNextQuestion();
        })
        .error(function (error) {
            $scope.status = 'Unable to load questions: ' + error.message;
        });





});
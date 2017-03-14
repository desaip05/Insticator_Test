var Factories = angular.module('insticator.factories', []);

Factories.factory('Results', function(){
	var questionsAttempted;
	var rightAnswerCount;

	var Results = {};

	Results.getResults = function(){
		return {
			questionsAttempted,
			rightAnswerCount
		}
	};

	Results.putResults = function(_questionsAttempted, _rightAnswerCount){
		questionsAttempted = _questionsAttempted;
		rightAnswerCount = _rightAnswerCount
	};

	return Results
})
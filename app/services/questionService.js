var Services = angular.module('insticator.services', []);
Services.service('QuestionStore', ['$http', function ($http) {

    var urlBase = 'staticData/';
    var self = this;

    this.getQuestions = function () {
        return $http.get(urlBase+'/question.json');
    };

}]);
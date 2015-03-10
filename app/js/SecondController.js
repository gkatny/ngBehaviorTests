(function () {
    'use strict';

    angular
        .module('app.controllers')
        .controller('SecondController', SecondController);

    function SecondController($scope) {
        $scope.name = "Pearl";
        $scope.sayHello = function() {
            $scope.greeting = "Hello " + $scope.name;
        }
    }

    SecondController.$inject = ['$scope'];


})();

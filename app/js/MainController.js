(function () {
    'use strict';

    angular
        .module('app', [])
        .controller('MainController', MainController);

    function MainController($scope) {
        $scope.name = "Meatloaf";
        $scope.sayHello = function() {
            $scope.greeting = "Hello " + $scope.name;
        }
    }

    MainController.$inject = ['$scope'];


})();
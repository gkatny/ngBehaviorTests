(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('UserWidgetController', UserWidgetController);

    function UserWidgetController(CurrentUser, $scope) {
        var dumbString = CurrentUser.getCurrentUser();
        $scope.test = "hello world";
    }

    UserWidgetController.$inject = ['CurrentUser', '$scope'];

})();
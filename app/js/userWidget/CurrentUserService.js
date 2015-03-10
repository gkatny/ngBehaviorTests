(function() {
    'use strict';
    angular
        .module('app.services')
        .service('CurrentUser', CurrentUser);

    function CurrentUser($http) {
        //===================PRIVATE METHODS=================//


        //======================INTERFACE====================//

        return{
            //INTERFACE
            getCurrentUser: function(artistName){
                return "this is a dumb string";
            }
        };
    }

    CurrentUser.$inject = ['$http'];

})();
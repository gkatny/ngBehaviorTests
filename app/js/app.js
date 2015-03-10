//angular.module('brooklynAdmin', []);

(function () {
    'use strict';

    var app =
        angular
        .module('brooklynAdmin', [
            'brooklynAdmin.controllers',
            'app.directives',
            'app.services',
            // 'app.spas',
            // 'app.widgets',
            // 'app.data',
            'ngRoute'
        ]);

    app.run(function ($rootScope) {
        $rootScope.navigateBack = function () {
            history.back();
            $rootScope.safeApply();
        };

        $rootScope.safeApply = function (fn) {
            var phase = this.$root.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (typeof (fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };
    });

    //app.constant('toastr', toastr);
})();
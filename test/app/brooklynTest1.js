describe('UNIT: MainController', function() {

    beforeEach(module('app'));
    
    var ctrl, scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();

        //beforeEach(module('app.controllers'));

        ctrl = $controller('MainController', {
            $scope: scope
        });

    }));

    it('should create $scope.greeting when calling sayHello', function(){
        expect(scope.greeting).toBeUndefined();
        scope.sayHello();
        expect(scope.greeting).toEqual("Hello Meatloaf");
    });
});

describe('UNIT: SecondController', function() {

    beforeEach(module('app','app.controllers'));

    var ctrl, scope;

    beforeEach(inject(function($controller, $rootScope) {

        scope = $rootScope.$new();

        ctrl = $controller('SecondController', {
            $scope: scope
        });

    }));



    it('should create SecondController $scope.greeting when calling sayHello', function(){
        expect(scope.greeting).toBeUndefined();
        scope.sayHello();
        expect(scope.greeting).toEqual("Hello Pearl");
    });
});
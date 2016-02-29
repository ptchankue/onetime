
describe('Controller: LoginCtrl', function () {
    var MyController, scope, config;
    // load the constant myConfig
    beforeEach(function() {
    module('app.login', function($provide) {
      $provide.constant('myConfig', {
                                      'name': 'AppName'
                                    }
                        ); // <= mock your constant
      });
    });

  beforeEach(function(){
        module('app.login');
        //module('app.module');

        inject(function ($controller, $rootScope, _myConfig_) {
            scope = $rootScope.$new();
            MyController = $controller('LoginCtrl', {
                $scope:scope
            });
            config = _myConfig_;
        });
    });
    it('should be to Hello', function () {
        expect(scope.message).toBe("Hello");
    });
    it('should be to AppName', function () {
        expect(config.name).toBe("AppName");
    });
});

describe('Controller: MyController', function () {
    var MyController, scope;
    // load the controller's module
    beforeEach(function(){
        module('app.login');
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            MyController = $controller('MyController', {
                $scope:scope
            });
        });
    });
    it('should be equal to 45', function () {
        expect(scope.val).toEqual(45);
    });
});

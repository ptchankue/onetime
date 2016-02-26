(function () {
    'use strict';

  angular
    .module('app.login', [])
    /*
    .config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
          when('/login', {
            templateUrl: 'apps/login/login.view.html',
            controller: 'LoginCtrl',

          });
    }])
    */
    .controller('LoginCtrl', LoginCtrl)

    function LoginCtrl($log, $scope, $http, $window, myConfig){
        $log.debug("LoginCtrl");
        $scope.hello = "Hello world";

        // Using a constant defined in app.js
        $log.log(myConfig.name);

        $scope.login = function(){
          $log.log("Run the login function");
          //$window.alert("Login in");
          $log.log($scope.email, $scope.password);
        }
    }
})();

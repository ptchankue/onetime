(function () {
    'use strict';

  angular
    .module('login.module', [])
    .controller('LoginCtrl', LoginCtrl)

    function LoginCtrl($log, $scope, $http, $window, myConfig){
        $log.debug("LoginCtrl");
        $scope.hello = "Hello world";

        // Using a constant defined in app.js
        $log.log(myConfig.name);

        $scope.login = function() {
          $log.log("Run the login function");
          //$window.alert("Login in");
          $log.log($scope.email, $scope.password);
        }
    }

})();

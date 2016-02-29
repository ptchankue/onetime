(function () {
    'use strict';

  angular
    .module('app.login', [])
    .controller('LoginCtrl', LoginCtrl)
    .controller('LoginController', LoginCtrl)
    .controller('MyController', MyController)

    function LoginCtrl($log, $scope, $http, $location, myConfig){
        $log.debug("LoginCtrl");
        $scope.hello = "Hello world";

        // Using a constant defined in app.js
        $log.log(myConfig.name);

        $scope.message = "Hello";

        $scope.login = function() {
          //$log.log("Run the login function");
          //$window.alert("Login in");

          if ($scope.email && $scope.password) {

              $log.log($scope.email, $scope.password);

              //call the service here

          }


        }//login

    }//LoginCtrl

    function MyController($log, $http, $scope){
        $scope.val = 45;
    }
})();

(function () {
    'use strict';

  angular
    .module('app.login')
    .controller('LoginCtrl', LoginCtrl)
    .controller('MyController', MyController)
    .controller('LogoutCtrl', LogoutCtrl)

    function LoginCtrl($log, $scope, $http, $location,
        $rootScope, $window, myConfig){

        $log.debug("LoginCtrl");
        $scope.hello = "Hello world";

        // Using a constant defined in app.js
        $log.log(myConfig.name);

        $scope.message = "Hello";

        $scope.login = function() {
          //$log.log("Run the login function");
          //$window.alert("Login in");
          var user;

          if ($scope.email && $scope.password) {

              $log.log($scope.email, $scope.password);

              if ($scope.email=='test@test.com' &&
                  $scope.password=='testsecret'){



                //creating dummy user

                user = {
                  'name': 'test name',
                  'firstname':'test first name',
                  'token':'xxxxxxxx'
                };

                $window.localStorage['currentUser'] = JSON.stringify(user);
                $log.debug("Loading home page");
                $rootScope.isLogged = true;
                //$window.location.href = '#/home';
              }else {
                  //call the service here
              }


          }


        }//login

    }//LoginCtrl

    function MyController($log, $http, $scope){
        $scope.val = 45;
    }

    function LogoutCtrl($log, $window) {
        //Clearing the localstorage
        $window.localStorage['currentUser'] = null;
        $log.log("Clearing the local storage");

    }
})();

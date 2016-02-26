(function () {
    'use strict';
      angular.module('app.login', [])
      angular.module('home.module', [])
      angular.module('app', [

        'ngRoute',

        'app.login',
        'home.module'])

        .controller('MainCtrl', MainCtrl)
        .constant("myConfig", {
              "mode": "dev",
              "name": "OneTime",
              "version": "1.0",
              "company": "ACompanyName"
        });


    function MainCtrl($scope, $rootScope, $window, $log, $location, myConfig) {

      if ($window.localStorage['currentUser']) {
          $log.log('User is already logged!..');
          var user = JSON.parse($window.localStorage['currentUser'] || '{}');
          $log.log(user);
          $rootScope.isLogged = true;

      } else {
          $log.log('>>> Not logged yet!\nRedirect to login');
          $rootScope.isLogged = false;
          //$window.location.href = '#/login';
          $location.path('/login' || '/')

      }

    }//MainCtrl



})();

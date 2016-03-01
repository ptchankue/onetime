(function () {
    'use strict';
      angular.module('app.login', [])
      angular.module('home.module', [])
      angular.module('app', [

        'ngRoute',
        'ngMessages',

        'app.login',
        'home.module'])

        .controller('MainCtrl', MainCtrl);


    function MainCtrl($scope, $rootScope, $window, $log, $location, myConfig) {

      if ($window.localStorage['currentUser']) {
          $log.log('User is already logged!..');
          var user = JSON.parse($window.localStorage['currentUser'] || '{}');
          $log.log(user);
          $rootScope.isLogged = true;
          $location.path('/home' || '/')

      } else {
          $log.log('>>> Not logged yet!\nRedirect to login');
          $rootScope.isLogged = false;
          //$window.location.href = '#/login';
          $location.path('/login' || '/')

      }

    }//MainCtrl



})();

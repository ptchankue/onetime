(function () {
    'use strict';
    angular.module('login.module', []);
    angular.module('stream.module', []);
    angular
        .module('app',[
                      'ngRoute',

                      'login.module',
          ])
        .controller('MainCtrl', MainCtrl)
        .constant("myConfig", {
              "mode": "dev",
              "name": "OneTime",
              "version": "1.0",
              "company": "ACompanyName"
        });

    function MainCtrl($scope, $rootScope, $window, $log, myConfig) {

      if ($window.localStorage['currentUser']) {
          $log.log('User is already logged!..');
          var user = JSON.parse($window.localStorage['currentUser'] || '{}');
          $log.log(user);
          $rootScope.isLogged = true;

      } else {
          $log.log('>>> Not logged yet!');
          $rootScope.isLogged = false;
          $window.location.href = '#/login';

      }

    }//MainCtrl


})();

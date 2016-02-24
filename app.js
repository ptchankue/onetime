(function () {
    'use strict';

  angular
    .module('app', ['ngRoute'])
    .controller('MainCtrl', MainCtrl)

    .config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
          when('/page1', {
            template: '<div>Page 1</div>',
            //controller: 'AddOrderController'
          }).
          when('/page2', {
            template: '<div>Page 2</div>',
            //controller: 'ShowOrdersController'
          }).
          when('/login', {
            templateUrl: 'apps/login/login.view.html',
            //controller: 'ShowOrdersController'
          }).
          otherwise({
            redirectTo: '/'
          });
      }]);

    function MainCtrl($scope, $rootScope, $window, $log) {
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

    }

})();

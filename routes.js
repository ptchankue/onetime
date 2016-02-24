angular.module('app')

  .config(['$routeProvider',
    function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'apps/home/home.view.html',
        //controller: 'AddOrderController'
      }).
      when('/page2', {
        template: '<div>Page 2</div>',
        //controller: 'ShowOrdersController'
      }).
      when('/login', {
        templateUrl: 'apps/login/login.view.html',
        //controller: 'LoginCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }])

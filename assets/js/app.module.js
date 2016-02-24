

(function () {
    'use strict';

    angular.module('yookosApp', [
            'ngRoute',
            'ngSanitize',
            'ngResource',
            'ngCookies',


            'globals.yookore',
            //'local.storage.yookore'

    ])
    .constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    })
    .constant('USER_ROLES', {
        all: '*',
        user: 'generalUser',
        administrator: 'administrativeUser',
        groupAdministrator: 'groupAdministrator',
        pageAdministrator: 'pageAdministrator',
        guest: 'guestUser'
    })
    .constant('API_PREFERRED_KEYS', {
        main: _env,
        fallback: 'mock'
    });
})();

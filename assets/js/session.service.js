(function () {
    'use strict';

    angular
        .module('yookosApp')
        .service('SessionService', SessionService);

    SessionService.$inject = ['$rootScope'];

    function SessionService($rootScope) {
        var userIsAuthenticated = false;
        var sessionInfoObject = {}

        this.create = function (sessionId,userid, username, userRole) {
            this.jsessionid = sessionId;
            this.userid = userid;
            this.username = username;
            this.userRole = userRole;
            this.setUserAuthenticated(true);

            sessionInfoObject['jsessionid'] = sessionId;
             sessionInfoObject['userid'] = userid;
            sessionInfoObject['username'] = username;
            sessionInfoObject['userRole'] = userRole;

            $rootScope.$broadcast('session-info-ready');
        }

        this.getInfo = function(sessionKey) {
            return sessionInfoObject[sessionKey];
        }

        this.getInfoObject = function() {
            return sessionInfoObject;
        }

        this.destroy = function () {
            this.jsessionid = null;
            this.userid = null;
            this.username = null;
            this.userRole = null;

            sessionInfoObject['jsessionid'] = null;
             sessionInfoObject['userid'] = null;
            sessionInfoObject['username'] = null;
            sessionInfoObject['userRole'] = null;

            this.setUserAuthenticated(false);
        }

        this.setUserAuthenticated = function (value) {
            userIsAuthenticated = value;
        };

        this.getUserAuthenticated = function () {
            return userIsAuthenticated;
        }
    }

})();
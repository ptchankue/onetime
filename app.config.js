(function () {
    'use strict';

      angular.module('app') //don't put the [], since app is created already
        .constant("myConfig", {
              "mode": "dev",
              "name": "OneTime",
              "version": "1.0",
              "company": "ACompanyName",
              "uas_url": "http://uas.apps.yookosapps.com/api/v1/",
              "client_token": ""
        })
        .config(function($logProvider){

            $logProvider.debugEnabled(true);

        });

})();

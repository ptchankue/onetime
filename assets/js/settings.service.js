/**
 * Created by kofi on 15/06/23.
 */
(function () {
    angular
        .module('yookosApp')
        .factory('SettingsService', SettingsService);

    SettingsService.$inject = ['$rootScope', '$resource', 'Base64','SessionService'];

    function SettingsService($rootScope, $resource, Base64, SessionService) {

        var requestPasswordReset = $resource(
            'http://private-9aa86-resetpassword1.apiary-mock.com/:username',
            {username: '@username'},

            {   save:{

                method:'POST'

                 },
                query: {
                    method: 'GET'
                },
                update: {
                    method: 'PUT'
                }
            });

        var sendPassword = $resource(
              'http://private-9aa86-resetpassword1.apiary-mock.com/:username',
            {username: '@username'},


            {   save:{

                method:'POST'

                 },
                query: {
                    method: 'GET'
                },
                update: {
                    method: 'PUT'
                }
            });


        var profileInfo = $resource(
            'http://private-58f5c-userprofile5.apiary-mock.com/:username',
            {username: '@username'},
            {
                query: {
                    method: 'GET'
                },
                update: {
                    method: 'PUT'
                }
            });


        var getProfileInfo = function (username) {

            console.log("Getting user profile for " + username);
            return profileInfo.query({username:username}, function(data) {

                //console.log('Return data');
                //console.log(data)

            });
        };


        var sendNewPassword = function (params,username) {
            console.log(username)
            return sendPassword.save({username:username}, params)
        };


        var sendPasswordResetRequest = function (params,username) {
            console.log(username)
            return requestPasswordReset.save({username:username}, params)
        };


        return {
            sendPasswordResetRequest: sendPasswordResetRequest,
            sendNewPassword:sendNewPassword,
            getProfileInfo:getProfileInfo

        };
    }


})
();


(function () {
    'use strict';

    angular
        .module('yookosApp')
        .factory('BaseStateService', BaseStateService);

    BaseStateService.$inject = ['YookoreLocalStorage'];
    function BaseStateService(YookoreLocalStorage) {
        var context = {};

        var getContext = function () {
            return context;
        }

        var getContextData = function (key, type) {
            var contextData = null;

            if (context && context.hasOwnProperty(key)) {
                contextData = context[key];
                //return context[key];
            }

            if (!contextData) {
                contextData = YookoreLocalStorage.retrieveData(key, type);
            }

            return contextData;
        }

        var setContextData = function (key, value, type) {
            YookoreLocalStorage.storeData(key, value, type);
            context[key] = value;
        }

        return {
            getContext: getContext,
            getContextData: getContextData,
            setContextData: setContextData
        }
    }
})();
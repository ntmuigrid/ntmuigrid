  'use strict';
  
  angular.module('ui.grid.i18n', []);
  angular.module('ui.grid.i18n').factory('i18nService', [function () {

    var service = {};
    var translation = {};

    service.add = function (lang, obj) {
        translation = obj;
    };

    service.getSafeText = function (key) {

        var propertiesTree = key.split('.');

        if (propertiesTree.length > 0) {

            var nextProperty = translation[propertiesTree[0]];

            if (propertiesTree.length > 1) {

                for (var i = 1; i < propertiesTree.length; i++) {
                    nextProperty = translation[propertiesTree[i]]
                }

                return nextProperty;

            } else {
                return nextProperty;
            }
        }


        return '';

    };

    service.get = function () {
        return translation;
    };

    return service;
  }]);
  
  angular.module('ui.grid', ['ui.grid.i18n']);
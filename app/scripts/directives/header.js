/**
 * Created by asafam on 1/26/15.
 */

'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:header
 * @description
 * # header
 */
var app = angular.module('clientApp');

app.directive('header', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/_header.html'
        };
    });

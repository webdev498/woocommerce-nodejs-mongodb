/**
 * Created by asafam on 1/26/15.
 */

'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });

angular.element(document).ready(function() {
    //var windowHeight = $(window).height();
    //$('#player').height(windowHeight);

});

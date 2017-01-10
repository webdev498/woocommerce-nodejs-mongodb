/**
 * Created by asafam on 1/26/15.
 */

'use strict';


var app = angular.module('clientApp');

app.directive('footer', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/_footer.html'
    };
});

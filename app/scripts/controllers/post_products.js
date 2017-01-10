'use strict';

var app = angular.module('clientApp');
/**
 * @ngdoc function
 * @name clientApp.controller:PostProductsCtrl
 * @description
 * # PostProductsCtrl
 * Controller of the clientApp
 */
app.controller('PostProductsCtrl', ['$window', function ($window) {

    this.redirectToProductLink = function(postProduct){
        $window.open(postProduct.product.url.source, '_blank');
    };

}]);


/**
 * Created by asafam on 1/26/15.
 */

'use strict';


var app = angular.module('clientApp');

/**
 * @ngdoc function
 * @name clientApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the clientApp
 */
app.controller('PostsCtrl', ['$scope', '$filter', function ($scope, $filter) {

    //var posts2 = Post.query({}, function() {
    //    $scope.posts2 = posts;
    //}, function() {
    //    console.log('[error] Post.query');
    //});
    //console.log('[debug] ' + posts2.length);

    var posts = [
        {
        id: '1',
        title: 'Maximize Your Style: Minimalist Look',
        description: '',
        type: 'video',
        video: {
            youTube: {
                videoId: 'wycjnCCgUes',
                preview: '',
                images: {
                    standard: {
                        width: 120,
                        height: 90,
                        url: 'http://img.youtube.com/vi/wycjnCCgUes/default.jpg'
                    },
                    medium: {
                        width: 320,
                        height: 180,
                        url: 'http://img.youtube.com/vi/wycjnCCgUes/mqdefault.jpg'
                    },
                    high: {
                        width: 640,
                        height: 360,
                        url: 'http://img.youtube.com/vi/wycjnCCgUes/maxresdefault.jpg'
                    }
                }
            }
        },
        postProducts: [
            {
                id: '10',
                product: {
                    title: 'Nasty Gal Pinnacle Lamé Dress',
                    description: '',
                    price: {
                        amount: 55.00,
                        currency: 'USD'
                    },
                    images: ['http://i.ngimg.com/resources/nastygal/images/products/processed/52414.0.zoom.jpg',
                        'http://i.ngimg.com/resources/nastygal/images/products/processed/52414.1.zoom.jpg'],
                    url: {
                        source: 'http://www.nastygal.com/clothes-dresses/nasty-gal-pinnacle-lam%C3%A9-dress',
                        affiliated: ''
                    },
                    rank: 1000,
                    store: ''
                },
                text: '',
                user: {
                    id: '100',
                    name: {
                        first: 'John',
                        middle: '',
                        last: 'Doe'
                    },
                    images: [{
                        width: 60,
                        height: 60,
                        url: 'http://i.ngimg.com/resources/nastygal/images/products/processed/47410.0.browse-l.jpg'
                    }]
                },
                association: 'appear',
                rank: 1000,
                createdAt: ''
            },
            {
                id: '11',
                product: {
                    title: 'Reverse Havana Lace Dress - Black',
                    description: '',
                    price: {
                        amount: 36.00,
                        currency: 'USD'
                    },
                    images: ['http://i.ngimg.com/resources/nastygal/images/products/processed/53344.0.zoom.jpg',
                        'http://i.ngimg.com/resources/nastygal/images/products/processed/53344.3.zoom.jpg'],
                    url: {
                        source: 'http://www.nastygal.com/clothes-dresses/reverse-havana-lace-dress--black',
                        affiliated: ''
                    },
                    rank: 1000,
                    store: ''
                },
                text: '',
                user: {
                    id: '100',
                    name: {
                        first: 'John',
                        middle: '',
                        last: 'Doe'
                    },
                    images: [{
                        width: 60,
                        height: 60,
                        url: 'http://i.ngimg.com/resources/nastygal/images/products/processed/47410.0.browse-l.jpg'
                    }]
                },
                association: 'appear',
                rank: 7777,
                createdAt: ''
            },

            {
                id: '12',
                product: {
                    title: 'Reverse Havana Lace Dress - Black',
                    description: '',
                    price: {
                        amount: 36.00,
                        currency: 'USD'
                    },
                    images: ['http://i.ngimg.com/resources/nastygal/images/products/processed/53344.0.zoom.jpg',
                        'http://i.ngimg.com/resources/nastygal/images/products/processed/53344.3.zoom.jpg'],
                    url: {
                        source: 'http://www.nastygal.com/clothes-dresses/reverse-havana-lace-dress--black',
                        affiliated: ''
                    },
                    rank: 1000,
                    store: ''
                },
                text: '',
                user: {
                    id: '100',
                    name: {
                        first: 'John',
                        middle: '',
                        last: 'Doe'
                    },
                    images: [{
                        width: 60,
                        height: 60,
                        url: 'http://i.ngimg.com/resources/nastygal/images/products/processed/47410.0.browse-l.jpg'
                    }]
                },
                association: 'appear',
                rank: 7777,
                createdAt: ''
            },

            {
                id: '13',
                product: {
                    title: 'Reverse Havana Lace Dress - Black',
                    description: '',
                    price: {
                        amount: 36.00,
                        currency: 'USD'
                    },
                    images: ['http://i.ngimg.com/resources/nastygal/images/products/processed/53344.0.zoom.jpg',
                        'http://i.ngimg.com/resources/nastygal/images/products/processed/53344.3.zoom.jpg'],
                    url: {
                        source: 'http://www.nastygal.com/clothes-dresses/reverse-havana-lace-dress--black',
                        affiliated: ''
                    },
                    rank: 1000,
                    store: ''
                },
                text: '',
                user: {
                    id: '100',
                    name: {
                        first: 'John',
                        middle: '',
                        last: 'Doe'
                    },
                    images: [{
                        width: 60,
                        height: 60,
                        url: 'http://i.ngimg.com/resources/nastygal/images/products/processed/47410.0.browse-l.jpg'
                    }]
                },
                association: 'appear',
                rank: 7777,
                createdAt: ''
            }
        ],
        user: {
            id: '100',
            name: {
                first: 'John',
                middle: '',
                last: 'Doe'
            },
            images: [{
                width: 60,
                height: 60,
                url: 'http://i.ngimg.com/resources/nastygal/images/products/processed/47410.0.browse-l.jpg'
            }]
        },
        rank: 1000,
        publishedAt: '',
        likesCount: 659,
        likes: [{
            user: {
                id: '100',
                name: {
                    first: 'John',
                    middle: '',
                    last: 'Doe'
                },
                images: [{
                    width: 60,
                    height: 60,
                    url: 'http://i.ngimg.com/resources/nastygal/images/products/processed/47410.0.browse-l.jpg'
                }]
            }
        }],
        commentsCount: 77,
        comments: [{
            title: 'Foo title',
            text: 'Bar text',
            user: {
                id: '100',
                name: {
                    first: 'John',
                    middle: '',
                    last: 'Doe'
                },
                images: [{
                    width: 60,
                    height: 60,
                    url: 'http://i.ngimg.com/resources/nastygal/images/products/processed/47410.0.browse-l.jpg'
                }]
            }
        }],
        sharesCount: 36,
        viewsCount: 121029
    }];

    $scope.posts = $filter('orderBy')(posts, 'rank', true);

    //$scope.posts = ['x', 'y'];

}]);

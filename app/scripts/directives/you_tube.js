'use strict';
/*jshint undef:false */

/**
 * @ngdoc directive
 * @name clientApp.directive:youTube
 * @description
 * # youTube
 */
angular.module('clientApp')
    .directive('youTube', ['$window', '$log', function($window, $log) {
        return {
            template: '<div></div>',
            restrict: 'E',
            scope: {
                videoId: '='
            },
            link: function(scope, element) {
                scope.$watch('videoId', function(newValue, oldValue) {
                    $log.info('Youtube video loaded: ' + scope.videoId);
                    //if (newValue === oldValue) {
                    //    $log.info('Youtube new = old: ' + scope.videoId);
                    //    return;
                    //}

                    if (oldValue && false) {
                    //    $log.info('Youtube in old: ' + scope.videoId);
                    //    scope.player.cueVideoById(scope.videoid);
                    } else {
                        // add the youtube script tag
                        $log.info('Youtube in new: ' + scope.videoId);
                        var tag = document.createElement('script');
                        tag.src = 'https://www.youtube.com/iframe_api';
                        var firstScriptTag = document.getElementsByTagName('script')[0];
                        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                        // init the player
                        $window.onYouTubeIframeAPIReady = function () {
                            $log.info('Youtube API is ready');

                            scope.player = new YT.Player(element.children()[0], {
                                videoId: scope.videoId,
                                width: '100%',
                                height: '100%',

                                playerVars: {
                                    'playsinline' : 1,
                                    'autoplay' : 1,
                                    'controls' : 1,
                                    'modestbranding' : 1,
                                    'rel' : 0,
                                    'showinfo' : 0,
                                    'iv_load_policy' : 3,
                                    'theme' : 'light'
                                },

                                events: {
                                    'onReady': function() {},
                                    'onPlaybackQualityChange': function() {},
                                    'onStateChange': function() {},
                                    'onError': function() {}
                                }

                            });

                        };
                    }

                });
            }
        };
    }]);

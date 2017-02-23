'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('news_app', [
  'ngRoute', 'ngCordova'
]);

// app.run(function($window, $rootScope) {
//     $rootScope.online = navigator.onLine;
//     $window.addEventListener("offline", function () {
//         $rootScope.$apply(function() {
//             $rootScope.online = false;
//         });
//     }, false);
//     $window.addEventListener("online", function () {
//         $rootScope.$apply(function() {
//             $rootScope.online = true;
//         });
//     }, false);
// });

app.config(function($routeProvider) {
    ($routeProvider)
      .when('/', {
          templateUrl : 'pages/login.html',
          controller : 'loginCtrl'
      })
      .when('/category', {
          templateUrl : 'pages/category.html',
          controller : 'categoryCtrl'
      })
      .when('/newsdisplay/:param', {
          templateUrl : 'pages/newsDisplay.html',
          controller : 'categoryCtrl'
      })
      .when('/addnews', {
          templateUrl : 'pages/addNews.html',
          controller : 'addNewsController'
      })
        .when('/showUserNews', {
            templateUrl : 'pages/showUserNews.html',
            controller : 'showNewsCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
});
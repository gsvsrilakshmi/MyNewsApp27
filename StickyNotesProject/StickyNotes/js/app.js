var app = angular.module('notes_app', [
  'ngRoute'
]);

app.config(function($routeProvider) {
    ($routeProvider)
      .when('/', {
          templateUrl : 'pages/home.html',
          controller : 'homeCtrl'
      })
      .when('/addSticky', {
          templateUrl : 'pages/addSticky.html',
          controller : 'addStickyCtrl'
      })
});



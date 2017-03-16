var app = angular.module('sticky_notes',[
'ngRoute' , 'ngCordova'
]);

app.config(function($routeProvider) {
    ($routeProvider)
      .when('/', {
          templateUrl : 'pages/login.html',
          controller : 'loginCtrl'
      })
      .when('/addNote', {
           templateUrl : 'pages/addNote.html',
           controller : 'addNoteCtrl'
      })
      .when('/view', {
          templateUrl : 'pages/viewNote.html',
          controller : 'dbCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
});
// var app = angular.module('news_app',['ngRoute']);
//
// app.config(function($routeProvider){
//     $routeProvider
//         .when('/', {
//             templateUrl : 'login.html'
//         })
//         .when('/category', {
//             templateUrl : 'category.html'
//         })
//         .otherwise({
//             redirectTo: '/'
//         });
// });
//
// app.controller('loginCtrl', function($scope, $location) {
//     $scope.submit = function () {
//         // var mail = $scope.mail;
//         var pswd = $scope.pswd;
//
//         if (pswd.length >= 6) {
//             $location.path('/category');
//         }
//         else {
//             alert('Password must be atleast of 6 characters!');
//         }
//
//     };
// });
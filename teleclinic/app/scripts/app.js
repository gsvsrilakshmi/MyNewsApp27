'use strict';

/**
 * @ngdoc overview
 * @name telehealthApp
 * @description
 * # telehealthApp
 *
 * Main module of the application.
 */
angular
  .module('telehealthApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($locationProvider,$stateProvider,$urlRouterProvider) {
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/form/location');
    $stateProvider
      /*.state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })*/

      .state('form', {
        url: '/form',
        templateUrl: 'views/form.html',
        controller : 'formController'
      })
      .state('form.location', {
        url : '/location',
        templateUrl : 'views/locationDetails.html'
      })
      .state('form.reasons', {
        url : '/reasons',
        templateUrl : 'views/ReasonsList.html'
      })
      .state('form.schedule', {
        url: '/schedule',
        templateUrl: 'views/schedulepage.html'
      })
      .state('form.confirmDetails', {
        url: '/confirmDetails',
        templateUrl: 'views/confirmDetails.html'
      })
      .state('signup',{
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'

      })
      .state('guestlogin',{
        url: '/guestlogin',
        templateUrl: 'views/guestlogin.html',
        controller: 'GuestloginCtrl',
        controllerAs: 'guestlogin'

      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'SigninCtrl'

      })
      .state('success', {
        url: '/success',
        templateUrl: 'views/successPage.html'

      })
      .state('termsofuse', {
        url: '/termsofuse',
        templateUrl: 'views/termsOfUse.html'

      })
      .state('privacypolicy', {
        url: '/privacypolicy',
        templateUrl: 'views/privacyPolicies.html'

      })
      ;
      
  })
  .directive("limitTo", [function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            var limit = parseInt(attrs.limitTo);
            angular.element(elem).on("keypress", function(e) {
                if (this.value.length == limit) e.preventDefault();
            });
        }
    }
}])
   .run(
    function ($rootScope, $route, $location) {
      $rootScope.BaseUrl="http://182.73.224.120:8000/telehealth";
      $rootScope.$on('$locationChangeSuccess', function() {
        $rootScope.actualLocation = $location.path();
    });        
   $rootScope.$watch(function () {return $location.path()}, function (newLocation, oldLocation) {
        if(oldLocation == '/success' && newLocation == '/login') {
            $location.path('/success');        }
        if(oldLocation === '/login' && newLocation === '/form/confirmDetails') {
            $location.path('/login');        }
        if(oldLocation === '/success' && newLocation === '/guestlogin') {
            $location.path('/success');        }
    });

    // $rootScope.$on("$locationChangeStart", function(event, next, current) { 

    //         if(next==current && next=='/form/reasons') {
    //             event.preventDefault();
    //             $state.go('form.location');
    //             //$location.path('/location');
    //         }

    //       });
      
    });

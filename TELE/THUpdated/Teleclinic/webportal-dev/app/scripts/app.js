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
        templateUrl : 'views/ReasonsList.html',
      })
      .state('form.schedule', {

        url: '/schedule',
        templateUrl: 'views/schedulepage.html',
        Controller: 'ScheduleCtrl',
        controllerAs: 'schedule'

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
        templateUrl: 'views/login.html'

      })
      .state('success', {
        url: '/success',
        templateUrl: 'views/successPage.html'

      })
      ;
      
  })
  .run(
    function ($rootScope, $state) {

      $rootScope.BaseUrl="http://10.10.21.10:8000/api";

    });

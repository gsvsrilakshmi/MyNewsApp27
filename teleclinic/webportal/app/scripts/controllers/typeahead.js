'use strict';

/**
 * @ngdoc function
 * @name telehealthApp.controller:TypeaheadCtrl
 * @description
 * # TypeaheadCtrl
 * Controller of the telehealthApp
 */
angular.module('telehealthApp')
  .controller('TypeaheadCtrl', function ($scope) {
    
    $scope.selected = undefined;
    $scope.states = ['Kondapur', 'Madhapur', 'Tolichowki'];

  });
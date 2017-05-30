'use strict';

/**
 * @ngdoc function
 * @name telehealthApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the telehealthApp
 */
angular.module('telehealthApp')
  .controller('formController', function (restcalls,$scope) {

    $scope.reasonsList = {};

     // function to process the form
    $scope.processForm = function() {
        alert('awesome!');  
    };
    
/*
    $scope.totalDays = 31 ;
    $scope.totalMonths = 12 ;
    $scope.totalyears = 90 ;


    $scope.days = [] ;

    for(var i=0; i<$scope.totalDays ; i++){
    	$scope.days.push(i+1);
    }

    $scope.months = [] ;

    for(var i=0; i< $scope.totalMonths; i++){
    	$scope.months.push(i+1);
    }


    $scope.years = [] ;

    var currentyear = new Date().getFullYear();

    for(var i=currentyear; i > currentyear - $scope.totalyears; i--){

    	$scope.years.push(i);

    }

    $scope.states = [ "Andra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir",
    "Jharkhand", "Karnataka", "Kerala", "Madya Pradesh", "Maharashtra", "Manipur", "Meghalaya","Mizoram", "Nagaland", "Orissa", "Punjab", "Rajasthan",
    "Sikkim", "Tamil Nadu","Telangana", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal" ];

    $scope.cities = ["Hyderabad", "Itangar", "Dispur", "Patna", "Raipur", "Panaji", "Gandhinagar", "Chandigarh", "Shimla", "Srinagar and Jammu",
    "Ranchi", "Bangalore", "Thiruvananthapuram", "Bhopal", "Mumbai", "Imphal", "Shillong", "Aizawi", "Kohima", "Bhubaneshwar", "Chandigarh", "Jaipur",
    "Gangtok", "Chennai", "Agartala", "Dehradun", "Lucknow", "Kolkata"];
*/
    
        restcalls.getReasonsList().then(function(response){
            $scope.reasons = response.data;
            $scope.selected = $scope.reasons[1];
        });

        restcalls.getLocations().then(function(response){
            $scope.states = response.data;
            $scope.searchTextSelected = '';
        });

    /*$scope.searchTextSelected = '';
    $scope.states = ["Hyderabad", "Itangar", "Dispur", "Patna", "Raipur", "Panaji"];
*/
        
  });

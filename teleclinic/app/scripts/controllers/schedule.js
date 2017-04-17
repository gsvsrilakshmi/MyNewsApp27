'use strict';

/**
 * @ngdoc function
 * @name telehealthApp.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the telehealthApp
 */
angular.module('telehealthApp')

  .controller('ScheduleCtrl', function ($scope, $state, $rootScope, $locationChangeStart) {

  	

var currentDate = moment();

var firstWeek = moment().add(1, 'w');
var secondWeek = moment().add(2, 'w');

    var fnWeekDays = function(dt) {

        var currentDate = dt;
        var weekStart = currentDate.clone().startOf('week');
        var weekEnd = currentDate.clone().endOf('week');

        var days = [];
        for (var i = 0; i <= 6; i++) {
            days.push(moment(weekStart).add(i, 'days').format("dddd MMMM Do"));
        }
        return days;
    };
    
    $scope.weekDays = fnWeekDays(currentDate);
$scope.currentWeekDates =function(){

	 $scope.weekDays = fnWeekDays(currentDate);
};



    $scope.firstWeekDates =function(){
	 $scope.weekDays=fnWeekDays(firstWeek);
   };

    $scope.secondWeekDates = function(){
	$scope.weekDays =fnWeekDays(secondWeek);

}; 
});

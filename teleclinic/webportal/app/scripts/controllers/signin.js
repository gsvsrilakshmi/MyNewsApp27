'use strict';

/**
 * @ngdoc function
 * @name telehealthApp.controller:SigninCtrl
 * @description
 * # SigninCtrl
 * Controller of the telehealthApp
 */
angular.module('telehealthApp')
  .controller('SigninCtrl', function ($scope, restcalls, $location, $rootScope, $filter) {

  	$scope.login = function () {
            $scope.dataLoading = true;
            $scope.errorMsg = " ";
            var userObject = {
            	"username" : $scope.username,
            	"password" : $scope.password
            };
            restcalls.login(userObject).then(function(response) {
                if(response.data.Status == 'Success') {
                        $rootScope.email = $scope.username;
                        var formattedDate =   $filter('date')($rootScope.selectedDate, "yyyy-MM-dd");
                    //booking appointment
                    var requestObj = {
                        "email" : $scope.username,
                        "is_guest" : 'False',
                        "location" : $rootScope.locationName,
                        "date" : formattedDate,
                        "slot" : $rootScope.selectedSlot
                    };

                    restcalls.bookAnAppointment(requestObj).then(function(response){
                       if (response.data.Status == 'Booked') {
                           $location.path('/success'); 
                        }  
                        else {
                            // $(".col-sm-6").html("There is an error in booking an appointment. Please try it again!!");
                            $location.path("/login");
                        }   
                    });
                    
                } else {
                    $scope.error = response.data.Message;
                    if (response.data.Status == 'Failure') {
                        // alert($scope.error);
                        if (response.data.Message.charAt(0) == 'U')  {
                              // $(".col-sm-8").html($scope.error); 
                              $scope.errorMsg = $scope.error;

                        }
                        else {
                             // $(".col-sm-12").html($scope.error); 
                             $scope.errorMsg = $scope.error;

                        }
                        
                    }                
                    $scope.dataLoading = false;
                }
            });
        };

        $scope.guestConfirmationInfo = function(){
            $scope.sDate = $scope.selectedDate;
            $scope.sSlot = $rootScope.selectedSlot;
        };
    
  });

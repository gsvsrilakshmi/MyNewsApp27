'use strict';

/**
 * @ngdoc function
 * @name telehealthApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the telehealthApp
 */
angular.module('telehealthApp')

  .controller('GuestloginCtrl', function ($scope, restcalls, $location, $rootScope, $filter,$window) {


    $scope.resetForm = function() {

    	document.getElementById("myForm").reset() ;

    };

    $scope.totalDays = 31 ;
    $scope.totalMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov", "Dec"] ;
    $scope.totalyears = 90 ;


    $scope.days = [] ;

    for(var i=0; i<$scope.totalDays ; i++){
    	$scope.days.push(i+1);
    }

    $scope.months = [] ;

    for(i=0; i< $scope.totalMonths.length; i++){
    	$scope.months.push($scope.totalMonths[i]);
    }


    $scope.years = [] ;

    var currentyear = new Date().getFullYear();

    for(i=currentyear; i > currentyear - $scope.totalyears; i--){

    	$scope.years.push(i);

    }

    // $scope.states = [ "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir",
    // "Jharkhand", "Karnataka", "Kerala", "Madya Pradesh", "Maharashtra", "Manipur", "Meghalaya","Mizoram", "Nagaland", "Orissa", "Punjab", "Rajasthan",
    // "Sikkim", "Tamil Nadu","Telangana", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal" ];

    $scope.states = ["Telangana"];

    // $scope.cities = ["Hyderabad", "Itangar", "Dispur", "Patna", "Raipur", "Panaji", "Gandhinagar", "Chandigarh", "Shimla", "Srinagar and Jammu",
    // "Ranchi", "Bangalore", "Thiruvananthapuram", "Bhopal", "Mumbai", "Imphal", "Shillong", "Aizawi", "Kohima", "Bhubaneshwar", "Chandigarh", "Jaipur",
    // "Gangtok", "Chennai", "Agartala", "Dehradun", "Lucknow", "Kolkata"];

    $scope.cities = ["Adilabad", "Bhadradri Kothagudem","Hyderabad","Jagtial", "Jangaon","Jayashankar Bhupalpalle",
    "Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad","Mahabubnagar","Mancherial",
    "Medak","Medchal–Malkajgiri","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla",
    "Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal Rural","Warangal Urban",
    "Yadadri Bhuvanagiri"];

    $scope.success = function() {
        var userObject = {
            "firstname" : $scope.user.firstname,
            "lastname" : $scope.user.lastname,
            "DOB_mm" : $scope.user.month,
            "DOB_dd" : $scope.user.day,
            "DOB_yyyy" : $scope.user.year,
            "mailid" : $scope.user.email,
            "mobileno" : $scope.user.contactNumber,
            "contact_person" : $scope.user.contactPerson,
            "alternate_contact" : $scope.user.contactNumberOther,
            "address_line_1" : $scope.user.address1,
            "address_line_2" : $scope.user.address2,
            "location" : $scope.user.state,
            "city" : $scope.user.city,
            "zip_code" : $scope.user.zip
        };

        $scope.dataLoading = true;
        restcalls.guestlogin(userObject).then( function(response) {
            if(response){
                $rootScope.email = $scope.user.email;
                var formattedDate =   $filter('date')($rootScope.selectedDate, "yyyy-MM-dd");
            var requestObj = {
                        "email" : $scope.user.email,
                        "is_guest" : 'True',
                        "location" : $rootScope.locationName,
                        "date" : formattedDate,
                        "slot" : $rootScope.selectedSlot
                    };
                    if (response.data.Status == 'CREATED') {
                       restcalls.bookAnAppointment(requestObj).then(function(response){
                            if (response.data.Status == 'Available') {
                               $location.path('/success'); 
                            }  
                            else if(response.data.Status == 'Booked') {
                                alert(response.data.Message);
                                $location.path('/location');
                            }                  
                        });   
                    }
                    else {
                        // $(".col-sm-8").html("Problem in logging as guest user, please try again!");
                        $scope.errorMsg = "Problem in logging as guest user, please try again!";
                    }
                              
            }
        });
        

    };

    $scope.cancel = function() {
        var selected = confirm("Do you really want to cancel?? You cannot come back and find your Details!!");
        if (selected == true) {
            $location.path('/login');
        }
        else {
        }
    }
    
  })
.directive('disableArrows', function() {

  function disableArrows(event) {
    if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault();
    }
  }

  return {
    link: function(scope, element, attrs) {
      element.on('keydown', disableArrows);
    }
  };  
})

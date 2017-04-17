'use strict';

/**
 * @ngdoc service
 * @name telehealthApp.restcalls
 * @description
 * # restcalls
 * Service in the telehealthApp.
 */
angular.module('telehealthApp')
  .service('restcalls', function ($q,$rootScope,$http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var model = this;
    var headers = {
				'Access-Control-Allow-Origin' : '*',
				'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
				'Content-Type': 'application/json',
			};

    model.getLocations = function(){
    	var differed=$q.defer();
    	$http({
    		method: 'GET',
    		header:headers,
    		url: $rootScope.BaseUrl + '/locations/'
    	})
    	.then(function successCallback(response) {
    	
    	//console.log(JSON.stringify(response));
    	differed.resolve(response);

    }).catch(function(response){

    	differed.reject(response);
    });
    return differed.promise;
    };

    model.getReasonsList=function(){ 
    var differed=$q.defer();	
    	/*$http({
    		method: 'GET',
    		header:headers,
    		url: $rootScope.BaseUrl + '/reasons/'
    	})*/
    	$http.get($rootScope.BaseUrl + '/reasons/')
    	.then(function successCallback(response) {

    	//console.log(JSON.stringify(response));
    	differed.resolve(response);

    }).catch(function(response){

    	differed.reject(response);
    });
    return differed.promise;
    };


    model.login=function (userObject){
        var differed=$q.defer();

        /*$http.post($rootScope.BaseUrl+'/login',userObject,headers)*/
        $http({
            method: 'POST',
            header:headers,
            data: userObject,
            url: $rootScope.BaseUrl + '/login/'
        })
    .then(function(response) {
        console.log("login service success" + JSON.stringify(response));
        differed.resolve(response);
    }).catch(function(response){

        differed.reject(response);
    });
    return differed.promise;

    };

    model.getAllSlots = function(location){

        var differed=$q.defer();
        $http({
            method: 'POST',
            header:headers,
            data: {"location": location},
            url: $rootScope.BaseUrl + '/availableslots/'
        })
        .then(function successCallback(response) {
        differed.resolve(response);

    }).catch(function(response){

        differed.reject(response);
    });
    return differed.promise;
    };

model.guestlogin = function(userObject) {
        var differed=$q.defer();

        $http.post($rootScope.BaseUrl + "/guest/", userObject)
            .then(function(response) {
                differed.resolve(response);

            }).catch(function(response){
                differed.reject(response);
            });
        return differed.promise;
    };

model.bookAnAppointment = function(request){

        var differed=$q.defer();
        $http({
            method: 'POST',
            header:headers,
            data: request,
            url: $rootScope.BaseUrl + '/booking/'
        })
        .then(function successCallback(response) {
        differed.resolve(response);

    }).catch(function(response){

        differed.reject(response);
    });
    return differed.promise;
    };
});

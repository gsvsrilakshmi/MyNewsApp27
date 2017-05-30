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
    		url: 'http://10.10.21.10:8000/api/locations/'
    	})
    	.then(function successCallback(response) {
    	
    	console.log(JSON.stringify(response));
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

    	console.log(JSON.stringify(response));
    	differed.resolve(response);

    }).catch(function(response){

    	differed.reject(response);
    });
    return differed.promise;
    };
});

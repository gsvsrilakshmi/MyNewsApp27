'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('news_app', [
  'ngRoute', 'ngCordova'
]);

var category= {
    AllNews: "https://rss.sciencedaily.com/all.xml",
    TopNews: "https://rss.sciencedaily.com/top.xml",
    Science: "https://rss.sciencedaily.com/top/science.xml",
    Health: "https://rss.sciencedaily.com/top/health.xml",
    Technology: "https://rss.sciencedaily.com/top/technology.xml",
    Environment: "https://rss.sciencedaily.com/top/environment.xml",
    Society: "https://rss.sciencedaily.com/top/society.xml",
    StrangeOffbeat: "https://rss.sciencedaily.com/strange_offbeat.xml",
    MostPopular: "https://rss.sciencedaily.com/most_popular.xml"
};

//app.run(function($window, $rootScope) {
//    $rootScope.online = navigator.onLine;
//    $window.addEventListener("offline", function () {
//        $rootScope.$apply(function() {
//            $rootScope.online = false;
//        });
//    }, false);
//    $window.addEventListener("online", function () {
//        $rootScope.$apply(function() {
//            $rootScope.online = true;
//        });
//    }, false);
//});

app.config(function($routeProvider) {
    ($routeProvider)
      .when('/', {
          templateUrl : 'pages/login.html',
          controller : 'loginCtrl'
      })
      .when('/category', {
          templateUrl : 'pages/category.html',
          controller : 'categoryCtrl'
      })
      .when('/newsdisplay/:param', {
          templateUrl : 'pages/newsDisplay.html',
          controller : 'categoryCtrl'
      })
      .when('/addnews', {
          templateUrl : 'pages/addNews.html',
          controller : 'addNewsController'
      })
      .otherwise({
        redirectTo: '/'
      });
});

app.controller('loginCtrl', function($scope, $location,$route) {

    $scope.submitForm = function() {

        // check to make sure the form is completely valid
        if ($scope.userForm.$valid) {
            $location.path('/category');
        }
    };

});

app.controller('categoryCtrl', function($scope, $location) {
    var categoryItem;
    this.categoryList = category;

    this.getKeys=function () {
        var keys=[];
        for (categoryItem in this.categoryList){
            keys.push(categoryItem);
        }
        return keys;

    };

    $scope.newsDisplay = function(categoryItem) {
        //$scope.key = k;
        $location.path('/newsdisplay/'+ categoryItem);
    };

    $scope.goToLogin = function () {
        $location.path('/');
    };

    $scope.addNews = function() {
        $location.path('/addnews');
    };
    //   console.log("getkeys "+this.getKeys())
});

app.controller('newsdisplayCtrl', function($scope, $http, $location, $routeParams) {
    $scope.categoryType = $routeParams;
    $http({
       method: 'GET',
        url: category[$scope.categoryType.param]
    }).then(function(response) {
            var xml = response.data;
            var jsonText = $.xml2json(xml);
            $scope.newsText = jsonText;

        });

    $scope.goToLogin = function () {
        $location.path('/');
    };

    $scope.goTocategory = function() {
        $location.path('/category');
    }
});

//app.directive('camera', function() {
//    return {
//        restrict: 'A',
//        require: 'ngModel',
//        link: function(scope, elm, attrs, ctrl) {
//            elm.on('click', function() {
//                navigator.camera.getPicture(function (imageURI) {
//                    scope.$apply(function() {
//                        ctrl.$setViewValue(imageURI);
//                    });
//                }, function (err) {
//                    ctrl.$setValidity('error', false);
//                }, { quality: 50, destinationType: Camera.DestinationType.FILE_URI }
//            });
//        }
//    };
//});

app.controller('addNewsController',
    function($scope, $location, $cordovaCamera) {
        $scope.saved = localStorage.getItem('newsItem');
        $scope.newsItem = (localStorage.getItem('newsItem')!==null) ? JSON.parse($scope.saved) : [ {text: 'Science', done: false}, {text: 'Technology', done: false} ];
        localStorage.setItem('newsItem', JSON.stringify($scope.newsItem));

        $scope.addNews = function() {
            $scope.newsItem.push({

                headline: $scope.headline,
                date: $scope.date,
                description:$scope.description,
                reporter: $scope.reporter,
                text: $scope.newsText,
                done: false
            });

            $scope.headline = '';
            $scope.date = '';
            $scope.description = '';
            $scope.reporter = '';
            $scope.newsText = ''; //clear the input after adding
            localStorage.setItem('newsItem', JSON.stringify($scope.newsItem));
        };

        $scope.archive = function() {
            var oldNews = $scope.newsItem;
            $scope.newsItem = [];
            angular.forEach(oldNews, function(news){
                if (!news.done)
                    $scope.newsItem.push(news);
            });
            localStorage.setItem('newsItem', JSON.stringify($scope.newsItem));
        };

        $scope.category = function() {
            $location.path('/category');
        };

        $scope.takePhoto = function () {
            var options = {
                quality: 75,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 300,
                targetHeight: 300,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            };

            $cordovaCamera.getPicture(options).then(function (imageData) {
                $scope.imgURI = "data:image/jpeg;base64," + imageData;
            }, function (err) {
                // An error occured.
            });
        };

        $scope.choosePhoto = function () {
            var options = {
                quality: 75,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 300,
                targetHeight: 300,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            };

            $cordovaCamera.getPicture(options).then(function (imageData) {
                $scope.imgURI = "data:image/jpeg;base64," + imageData;
            }, function (err) {
                // An error occured. Show a message to the user
            });
        }

    }
);
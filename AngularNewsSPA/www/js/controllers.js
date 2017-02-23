
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
    this.category = categoryList;

    this.getKeys=function () {
        var keys=[];
        for (categoryItem in this.category){
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
        url: categoryList[$scope.categoryType.param]
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

//app.controller('cameraCtrl', function($scope, $cordovaCamera) {
//    $scope.takePhoto = function () {
//        var options = {
//            quality: 75,
//            destinationType: Camera.DestinationType.DATA_URL,
//            sourceType: Camera.PictureSourceType.CAMERA,
//            allowEdit: true,
//            encodingType: Camera.EncodingType.JPEG,
//            targetWidth: 300,
//            targetHeight: 300,
//            popoverOptions: CameraPopoverOptions,
//            saveToPhotoAlbum: false
//        };
//
//        $cordovaCamera.getPicture(options).then(function (imageData) {
//            $scope.imgURI = "data:image/jpeg;base64," + imageData;
//        }, function (err) {
//            // An error occured.
//        });
//    };
//
//    $scope.choosePhoto = function () {
//        var options = {
//            quality: 75,
//            destinationType: Camera.DestinationType.DATA_URL,
//            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
//            allowEdit: true,
//            encodingType: Camera.EncodingType.JPEG,
//            targetWidth: 300,
//            targetHeight: 300,
//            popoverOptions: CameraPopoverOptions,
//            saveToPhotoAlbum: false
//        };
//
//        $cordovaCamera.getPicture(options).then(function (imageData) {
//            $scope.imgURI = "data:image/jpeg;base64," + imageData;
//        }, function (err) {
//            // An error occured. Show a message to the user
//        });
//    }
//});

app.controller('captureCtrl', function($scope, $cordovaCapture) {

      $scope.captureAudio = function() {
        var options = { limit: 2, duration: 20 };

        $cordovaCapture.captureAudio(options).then(function(audioData) {
          // Success! Audio data is here
          var i, path, len;

                for (i = 0, len = audioData.length; i < len; i += 1) {
                   path = audioData[i].fullPath;
                   console.log(audioData);
                }
        }, function(err) {
          // An error occurred. Show a message to the user
        });
      }

      $scope.captureVideo = function() {
        var options = { limit: 2, duration: 15 };

        $cordovaCapture.captureVideo(options).then(function(videoData) {
          // Success! Video data is here
            var i, path, len;

                for (i = 0, len = videoData.length; i < len; i += 1) {
                   path = videoData[i].fullPath;
                   console.log(videoData);
                }
        }, function(err) {
          // An error occurred. Show a message to the user
        });
      }

});

app.controller('addNewsController',
    function($scope, $location, $cordovaCamera) {
        localStorage.setItem('newsItem', JSON.stringify($scope.newsItem));

        $scope.addNews = function() {
            $scope.newsItem = [];
            $scope.newsItem.push({

                headline: $scope.headline,
                date: $scope.date,
                description:$scope.newsText,
                reporter: $scope.reporter,
                image : $scope.imgURI,
                done: false
            });

            $scope.headline = '';
            $scope.date = '';
            $scope.newsText = '';
            $scope.reporter = '';
            //$scope.newsText = ''; //clear the input after adding
            localStorage.setItem('newsItem', JSON.stringify($scope.newsItem));

            $scope.showUserNews();
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
            };

//        $scope.archive = function() {
//            var oldNews = $scope.newsItem;
//            $scope.newsItem = [];
//            angular.forEach(oldNews, function(news){
//                if (!news.done)
//                    $scope.newsItem.push(news);
//            });
//            localStorage.setItem('newsItem', JSON.stringify($scope.newsItem));
//        };

        $scope.category = function() {
            $location.path('/category');
        };

        $scope.showUserNews = function() {
            $location.path('/showUserNews');
        };

    }
);

app.controller('showNewsCtrl', function($scope, $location){
     $scope.news_article = JSON.parse(localStorage.getItem('newsItem'));
});
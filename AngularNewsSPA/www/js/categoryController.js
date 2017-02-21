var app = angular.module('news_app',['ngRoute']);

app.controller('categoryCtrl', function($scope, $location) {

    //console.log("inside category")
    var i;
    this.categoryList = category;

    //console.log(this.categoryList)
    this.getKeys=function () {
        var keys=[];
        for (i in this.categoryList){
            keys.push(i);
        }
        return keys;

    };

    $scope.newsDisplay = function(k) {
        $scope.key = k;
        $location.path('/newsdisplay/'+$scope.key);
    };

    $scope.goToLogin = function () {
        $location.path('/');
    };

    $scope.addNews = function() {
        $location.path('/addnews');
    };
    //   console.log("getkeys "+this.getKeys())
});

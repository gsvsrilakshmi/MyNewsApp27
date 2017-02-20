var app = angular.module('news_app',['ngRoute']);

app.controller('loginCtrl', function($scope, $location) {
    $scope.submit = function () {
        if ($scope.pswd.length >= 6) {
            $location.path('/category');
        }
        else {
            alert('Password must be atleast of 6 characters!');
        }

    };
});
var app = angular.module('sticky_notes');

app.controller('addNoteCtrl',function($scope, notesService) {

    $scope.title = 'title1';
    $scope.description = 'description1';

    $scope.insert = function() {
        notesService.insert();
    };

    $scope.retrieve = function() {
        notesService.retrieve();
    }
});

app.controller('loginCtrl', function($scope, loginService) {

    $scope.login = function() {
        loginService.login();
    }

    $scope.isAvailable = function() {
        loginService.isAvailable();
    }

    $scope.trySilentLogin = function() {
        loginService.trySilentLogin();
    }

    $scope.logout = function() {
        loginService.logout();
    }

    $scope.linkedinLogin = function() {
        loginService.linkedinLogin();
    }

    $scope.fbLogin = function() {
        loginService.fbLogin();
    }
});
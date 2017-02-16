var app = angular.module('news_app',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl : 'login.html'
        })
        .when('/category', {
            templateUrl : 'category.html'
        })
        .when('/addnews', {
            templateUrl : 'addNews.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

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

app.controller('newsdisplayCtrl', function($scope, $http) {
    $http.get(" https://rss.sciencedaily.com/all.xml")
        .then(function(response) {
            var xml = response.data;
            var json = $.xml2json(xml);
            $scope.message = json;
        });
});
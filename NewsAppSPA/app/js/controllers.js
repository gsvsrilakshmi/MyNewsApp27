app.controller('loginCtrl', function($scope, $location,$route) {

    $scope.submitForm = function() {

        // check to make sure the form is completely valid
        if ($scope.userForm.$valid) {
            $location.path('/category');
        }
        else {
            $route.reload();
        }

    };

});

app.controller('categoryCtrl', function($scope, $location) {

    //console.log("inside category")
    var categoryItem;
    this.categoryList = category;

    //console.log(this.categoryList)
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

app.controller('newsdisplayCtrl', function($scope, $http) {
    $http.get(" https://rss.sciencedaily.com/all.xml")
        .then(function(response) {
            var xml = response.data;
            var jsonText = $.xml2json(xml);
            $scope.newsText = jsonText;
            // $scope.msg = '';
            // for (var i =0;i < $scope.message.channel.item.length;i++) {
            //     $scope.msg += $scope.message.channel.item[i].title + "--";
            //     $scope.msg += $scope.message.channel.item[i].pubDate + "---";
            //     $scope.msg += $scope.message.channel.item[i].description + "----";
            // }
            // console.log($scope.message);

        });
});

app.controller('addNewsController',
    function($scope) {
        $scope.appTitle = "Add News";
        $scope.saved = localStorage.getItem('newsItem');
        $scope.newsItem = (localStorage.getItem('newsItem')!==null) ? JSON.parse($scope.saved) : [ {text: 'Science', done: false}, {text: 'Technology', done: false} ];
        localStorage.setItem('newsItem', JSON.stringify($scope.newsItem));

        $scope.addNews = function() {
            $scope.newsItem.push({
                text: $scope.newsText,
                done: false
            });
            $scope.newsText = ''; //clear the input after adding
            localStorage.setItem('newsItem', JSON.stringify($scope.newsItem));
        };

        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.newsItem, function(newsItem){
                count+= news.done ? 0 : 1;
            });
            return count;
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
    }
);
var app = angular.module('news_app',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl : 'login.html'
        })
        .when('/category', {
            templateUrl : 'category.html'
        })
        .when('/newsdisplay', {
            templateUrl : 'newsDisplay.html'
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
}

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


app.controller('categoryCtrl', function($scope, $location) {

    //console.log("inside category")
    this.categoryList = category;

    //console.log(this.categoryList)
    this.getKeys=function () {
        var keys=[];
        for (i in this.categoryList){
            keys.push(i);
        }
        return keys;

    };

    $scope.newsDisplay = function() {
        console.log("inside news display")
        $location.path('/newsdisplay');
    };

    $scope.goToLogin = function () {
        $location.path('/');
    };

    $scope.addNews = function() {
        $location.path('/addnews');
    };
  //   console.log("getkeys "+this.getKeys())
});

// app.controller('newsdisplayCtrl', function ($scope) {
//
//     this.category = category;
//     $scope.displayData = function() {
//         var button = getUrlButtonValue()['button'];
//         loadXMLDoc(button);
//     };
//
//     $scope.getUrlButtonValue = function() {
//         var buttons = [], hashButton;
//         var splittedButton = window.location.href.slice(window.location.href.indexOf('?')+ 1);
//         for(var i = 0;i < splittedButton.length;i++) {
//             hashButton = splittedButton[i].split("=");
//             buttons.push(hashButton[0]);
//             buttons[hashButton[0]] = hashButton[1];
//         }
//         return buttons;
//     };
//
//     $scope.loadXMLDoc = function(type) {
//         var xmlhttp = new XMLHttpRequest();
//         xmlhttp.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200)  {
//                 myFunction(this);
//             }
//         };
//
//         for (type in category) {
//             // console.log("hello")
//             xmlhttp.open("GET", category[type],true);
//             try {
//                 xmlhttp.send();
//             }
//             catch(err) {
//                 document.write("error resolved")
//             }
//         }
//     };
//
//     $scope.myFunction = function(xml) {
//         var i,j,img;
//         var xmlDoc = xml.responseXML;
//         var table = "";
//         var x = xmlDoc.getElementsByTagName("item");
//
//         for (i = 0;i < x.length; i++)  {
//             // image extraction
//
//             if (x[i].children.length > 5) {
//                 table += "<tr><td>"+ "<img src = " + x[i].children[3].attributes[0].nodeValue + "></img>" + "</td></tr>";
//             }
//
//             // $(xmlDoc).find('item').each(function() {
//             //     var $item = $(this);
//             //     img = $item.find("media\\:thumbnail").attr('url');
//             //     alert(img);
//             // })
//             // table += "<tr><td>"+ "<img src = " + img + "></img>" + "</td></tr>";
//
//
//
//             table += "<tr><td><b>" +
//                 x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
//                 "</td></tr></b><tr><td><br>"
//
//             // date formatting from est to ist
//             var date = x[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
//             //Tue, 07 Feb 2017 19:18:54 EST
//             var subDate = date.substring(17,22);
//             var time = subDate.split(":");
//             var timeHrs = time[0] % 12;
//             var timeMin = time[1];
//             var istHr = (timeHrs + 10) % 12;
//             var istMin = parseInt(timeMin) + 30;
//
//             if (istMin >= 60) {
//                 istHr += 1;
//                 istMin %= 60;
//             }
//
//             var formattedDate = date.substring(0,16) + " " + istHr + ":" + istMin;
//             table += formattedDate+"<br>" +
//                 x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
//                 "</td></tr>";
//         }
//
//         $(".col-sm-8").append(table);
//
//     };
// });
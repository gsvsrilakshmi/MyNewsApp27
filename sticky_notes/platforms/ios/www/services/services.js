var app = angular.module('sticky_notes');

app.service('notesService',['$scope'], function ($scope) {
        this.insert = function() {
            var db = window.sqlitePlugin.openDatabase({name: "notes.db"});

                    db.transaction(function(tx) {
                    tx.executeSql('DROP TABLE IF EXISTS notes_table');
                    tx.executeSql('CREATE TABLE IF NOT EXISTS notes_table (id integer primary key, title text, description text)',[]);

                    tx.executeSql("INSERT INTO notes_table (title, description) VALUES (?,?)", [$scope.title, $scope.description], function(tx, res) {
                        console.log("insertId: " + res.insertId + " -- probably 1");
                        console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");

                        }, function(e) {
                              console.log("ERROR: " + e.message);
                        });
            });
        }

        this.retrieve = function() {
               var db = window.sqlitePlugin.openDatabase({name: "notes.db"});
               db.transaction(function(tx) {
                    $scope.result = [];
                    tx.executeSql("select * from notes_table;", [], function(tx, res) {
                    for (var item = 0; item < res.rows.length;item++) {
                        $scope.result.push(res.rows.item(item));
                        console.log(res.rows.item(item).title);
                    }
                    alert($scope.result);
                    console.log("res.rows.length: " + res.rows.length + " -- should be 1");
                        //                                              console.log("res.rows.item(0).cnt: " + res.rows.item(0).cnt + " -- should be 1");
                    });
               });
        }
});

app.service('loginService', function($location) {

    this.fbLogin = function() {
         openFB.init({appId: '106075369928708'});
         openFB.login(
                         function(response) {
                             if(response.status === 'connected') {
                                 alert('Facebook login succeeded, got access token: ' + response.authResponse.accessToken);
                             } else {
                                 alert('Facebook login failed: ' + response.error);
                             }
                         }, {scope: 'email,read_stream,publish_actions'})
    }

    this.linkedinLogin = function() {
        OAuth.initialize('EJuNwI5lYJDLmVMnQ6Abduv9aVg')
            OAuth.popup('linkedin').done(function(result) {
                console.log(result);
                // do some stuff with result
            });
            result.me().done(function(data) {
                // do something with `data`, e.g. print data.name
            });
            $location.path('/addNote');
    }


  this.isAvailable = function() {
    window.plugins.googleplus.isAvailable(function(avail) {alert(avail)});
  }

  this.login = function() {
    window.plugins.googleplus.login(
        {},
        function (obj) {
          document.querySelector("#image").src = obj.imageUrl;
          document.querySelector("#image").style.visibility = 'visible';
          document.querySelector("#feedback").innerHTML = "Hi, " + obj.displayName + ", " + obj.email;
        },
        function (msg) {
          document.querySelector("#feedback").innerHTML = "error: " + msg;
          console.log('some error here: ' + msg);
        }
    );
    $location.path('/addNote');
  }

  this.trySilentLogin = function() {
    window.plugins.googleplus.trySilentLogin(
        {},
        function (obj) {
          document.querySelector("#image").src = obj.imageUrl;
          document.querySelector("#image").style.visibility = 'visible';
          document.querySelector("#feedback").innerHTML = "Silent hi, " + obj.displayName + ", " + obj.email;
        },
        function (msg) {
          document.querySelector("#feedback").innerHTML = "error: " + msg;
        }
    );
  }

  this.logout = function() {
    window.plugins.googleplus.logout(
        function (msg) {
          document.querySelector("#image").style.visibility = 'hidden';
          document.querySelector("#feedback").innerHTML = msg;
        },
        function (msg) {
          document.querySelector("#feedback").innerHTML = msg;
        }
    );
  }

  this.disconnect = function() {
    window.plugins.googleplus.disconnect(
        function (msg) {
          document.querySelector("#image").style.visibility = 'hidden';
          document.querySelector("#feedback").innerHTML = msg;
        },
        function (msg) {
          document.querySelector("#feedback").innerHTML = msg;
        }
    );
  }

  window.onerror = function(what, line, file) {
    alert(what + '; ' + line + '; ' + file);
  };

  function handleOpenURL (url) {
    document.querySelector("#feedback").innerHTML = "App was opened by URL: " + url;
  }



});

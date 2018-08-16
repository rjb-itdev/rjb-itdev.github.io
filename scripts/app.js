// Create the module              // Dependencies go in where the [] are
var app = angular
          .module('myModule', [])
          .controller("myController", function($scope, $http){

            $http.get("https://github.com/rjb-itdev/rjb-itdev.github.io/blob/master/data.json").then(function(response) {
              $scope.myData = response.data[1];
            });
      });

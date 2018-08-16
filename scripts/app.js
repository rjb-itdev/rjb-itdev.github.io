// Create the module              // Dependencies go in where the [] are
var app = angular
          .module('myModule', [])
          .controller("myController", function($scope, $http){

            $http.get("data.json").then(function(response) {
              $scope.myData = response.data[1];
            });
      });

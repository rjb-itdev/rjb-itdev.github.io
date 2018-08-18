var app=angular.module("app",["ngRoute"])
.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when("/book",{
    controller: "bookController",
    templateUrl:"./Templates/book.html"
  })
  .when("/home",{
    controller: "homeController",
    templateUrl:"/"
  })
  $locationProvider .html5Mode(true);
})
.controller("bookController",function($scope){
  $scope.message="Hi Im in books";
})
.controller("dataControlller",function($scope, $http){
  $http.get("data.json").then(function(response){
    var myData=response.data;
    console.log(myData);
  })
});

var app=angular.module("app",["ngRoute"])
.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when("/book",{
    controller: "bookController",
    templateUrl:"../book.html"
  })
  $locationProvider .html5Mode(true);
})
.controller("bookController",function($scope){
  $scope.message="Hi Im in books";
});

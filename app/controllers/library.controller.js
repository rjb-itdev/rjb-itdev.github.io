//My job is to pass data from the model to the view, in this case I am passing a JSON file with books in
"use strict";
angular.module("libraryApp")
    .controller("libraryController",function($scope, books){
    
    //Retrieve Library
    books.query(function(data){
        $scope.library = data;
    },function(err){
        console.error('An Error occured retrieving - Library ', err);
    })

    //Get book details by index
    $scope.searchByIndex = function($index){
        //console.log($index);
        //console.log($scope.library[$index]);
        $scope.bookDetails = $scope.library[$index];
        return $scope.bookDetails;
    }

});
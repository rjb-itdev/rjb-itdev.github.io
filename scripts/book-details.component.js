//Module to display book details and information
angular
    .module('libraryApp')
    .component('bookDetails',{
        template:
        
        '<div class="container" ng-repeat="book in validBook">'
        + '<h3>{{book.title}}</h3>'
        + '<br/>'
        + '<span ng-bind-html="book.body">' //sanitize the html that is in the body;
        + '{{book.body}}'
        + '</span>' 
        + '<br/>'
        + '<h6><strong>{{book.author}}</strong></h6>'
        + '</div>' 
        ,
        controller: function bookController($http, $location, $scope, $sce){    
            $http.get('data.json').then(function(response){
                
                self.library=response.data;
                //console.log($scope.url); 
                $scope.url = $location.path().split(/[/]/).pop(); //strip unwanted character from the url
                $scope.result = Object.keys(response.data).map(e=>response.data[e]); //Turn it in to a list so I can work with it
                $scope.validBook=$scope.result.filter(function(titles){
                    
                    return(titles.title==$scope.url); //Filter based on url from location
                })
                //console.log($scope.validBook);
            })
        }
    });
    

    
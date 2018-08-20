//Module to display Books from data source
angular.
    module('libraryApp')
    .component('bookList',{
        template:

        '<ul class="nav navbar-nav"" >' 
        + '<li" ng-repeat="book in $ctrl.library">'
        + '<a href="/{{book.title}}">{{book.title}}</a>' //query by value, get the URI from the browser(dom) and use that to query json in book-details.component
        + '</li>'
        + '</ul>'
        , 
        controller: function bookController($http){
            var self = this;
            $http.get('data.json').then(function(response){
                self.library=response.data;                
                })
        }
    });
    
    /*
    '<ul>' + 
    '<li ng-repeat="book in $ctrl.library">'
    + '<a href="/book">{{book.title}}</a>'
    + '</li>'
    + '</ul>',

    */
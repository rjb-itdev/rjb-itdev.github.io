angular.
  module('libraryApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!').html5Mode(true);

      $routeProvider.
        when('/:path*',{
            template: '<book-details></book-details>'
        })
        
    }
  ]);


/*
.otherwise({redirectTo: "/"
})
*/
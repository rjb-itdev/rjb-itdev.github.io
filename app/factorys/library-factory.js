//I inject data into controllers: in this case I am injecting the entire library into the Library Controller as 'books'
"use strict";
angular.module("libraryApp")
    .factory("books",function($resource){
    return $resource("https://rjb-itdev.github.io/data.json");
})

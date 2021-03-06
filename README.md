# rjb-itdev.github.io


# The Journey

## A foray into AngularJS

##### Next Steps: 

##### Learn about and implement some tests

#### 25/08/2018

Corrected bootstrap version, and added style. 

####TODO

* Create promise for ng-resource so the page waits till the data is ready before displaying book titles.

#### 24/08/2018 

This is an updated version of the exercise that I was given. In the time between initial submission I have continued
to learn and develop my skills in AngularJS.


The initial solution proved to be inefficient, buggy and was overkill for the task at hand. It demonstrated my lack of 
skill in AngularJS, but I felt that it showed I was able to think outside the box for a valid solution to a problem.

This is my latest attempt at developing a simple single page application. Initially I found that I was having trouble 
understanding how $scope worked when handling data between controllers, I am still coming to grips with this, however
in this single page application has only one small controller.

RjB.

### 16/08/2018

### Analysis

I saw that I needed to handle data, auto-generate links and, have a way to show information without reloading the page.
A way to select the correct book by link.

As data can change (be dynamic) I thought that a good idea was to make the application able to handle 
a more books without having to rewrite parts of the application.

### Learning
Starting out by reading documentation to get a handle on where to begin.
I read about the development environment and, how to procure the required files to use the framework. 

To speed things up I found a simple tutorial to get to know the basics about AngularJS, this showed me how things worked 
together to generate a simple page.

The requirements analysis deemed that using views to insert data into a page was probaly the correct way to go.
As well as generating views I needed a way to iterate over data to generate the links, documentation proved helpful here
and provided examples on how to iterate, and filter data. 
As stackoverflow as usual was an abundance of information. (not all was helpful)



### Difficulties
* Initially starting out development without a webserver and coming across CORS. I used node to overcome this and ran a simple
http server to eliminate this problem.
* Finding a way to select by title as per my requirements analysis.
  * After some thinking I came up with the idea to parse the url and select by title from the data. As the data did not have a 
unique identifier I felt that this was the most logical choice at the time.
  * I think this is a possible problem, due to the possibility of duplicate title data.
* Reloading the page gives a 404 response. I am still unsure as to why this is, after researching I found that modifying the
.htaccess file can remedy this problem but I get the feeling that it is the way I have structured my routing or, using $location
to select by title from the json data.

### Whats next?
I think that providing a look at this application will be more benefical at this time. Continued development will be on another
branch, as things progress and it gets better I will push it to master.

Make it prettier

##### The list
* Refactor
  * I have some calls to $http that can be refactored to a seperate module
  * General tidying up of code
  * Check for redundant code
  * Check that variable names make sense and match their task

* Learn how to write tests in AngularJS. In hindsight this would have been a better place to start developement.
  * Write tests to validate my code

### My thoughts on this
It was fun, I found a new framework to work with and thoroughly enjoyed it. Even if nothing comes from it I have had a good
experience and will continue to work with this framework to continue my learning and development.
I felt I was able to apply myself well too the task at hand and will continue to do so.

Thanks.



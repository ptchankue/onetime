#OneTime

OnTime is a small project showing case how to structure a large angular JS app

Running the project on port 8000:

		python -m SimpleHTTPServer 8000


##Tests
- Karma
- Jasmine

[Tutorial](http://ericnish.io/blog/set-up-jasmine-and-karma-for-angularjs/)

###Installing Karma & Jasmine

		sudo npm install -g karma-cli

Adding karma (the test runner)

		npm install karma --save-dev

Adding Jasmine (the testing framework)

		npm install karma-jasmine --save-dev


###Running the test

		karma init

Structure of the karma.con.js

		files: [
		  'bower_components/angular/angular.js',
		  'bower_components/angular-mocks/angular-mocks.js',
		  'js/app.js',
		  'tests/*.js'
		],

A Example of test:

		describe('example test', function() {
		  it('should be true', function() {
		    expect('foo').toBe('foo');
		  });
		});

Starting the watcher:

		karma start

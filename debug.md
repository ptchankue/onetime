
##How to find the source of an undefined  module

1)  Is file with 'MyCtrl' connected via html? (check twice if you concat or uglify your files)

<script src='path/to/controllers.js'></script>

2)   Is 'MyCtrl' defined correctly?

There are a few patterns:

app.controller('MyCtrl', ['$scope', function ($scope) {...}])

app.controller('MyCtrl', function ($scope) {...})

var MyCtrl = function ($scope) {...})

3)    Is 'MyCtrl' defined in right module?
    Is "MyCtrl's" module added to app dependencies?

angular.module('app', ['app.sources']);

    If you define your module multiple times, you should define it in this order:
        First define should be like


angular.module('app.sources', []);

(with [ ])

    Subsequent defines should be like

angular.module('app.sources');

(without [ ])

Important: Declaration order is important - definition with [ ] should go first.

    Check that module is defined only once. You may have forgotten to rename module after copy-paste. Check src for string like

angular.module('app.sources', []);

    Check your 'ng-app'. Better to use only one of these with name like ng-app='app' (In other words do not define multiple unnamed ngApp directives)

    Is your controller's syntax correct for your AngularJS version?

(There is a difference between definition in Angular 1.0.x and 1.2.x and higher. With Angular versions greater than 1.3.x, you cannot declare a global constructor function and use it with ng-controller)

var app = angular.module('myApp', ['myApp2'])
app.controller('myCtrl', function($scope){
    $scope.firstName = "Robert";
    $scope.lastName = "De Niro";
});

//defining app2
var app2 = angular.module('myApp2', [])
app2.controller('otherCtrl', function($scope){
    $scope.first = "Robert, from App2";
})

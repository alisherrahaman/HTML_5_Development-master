// create a module
 var app = angular.module('NestedApp',[]);


// Create a parent  controller
app.controller('parentCtrl',function ($scope) {
   $scope.test = '';
});

// Create a Child  controller
app.controller('ChildCtrl',function ($scope) {
   // $scope.test = '';
});
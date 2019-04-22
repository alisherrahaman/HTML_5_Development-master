// create a module
var app = angular.module('NestedAliasApp',[]);

// Create a parent controller


app.controller('ParentAliasCtrl',function () {
    this.test ='';
});


// Create a child controller


app.controller('ChildAliasCtrl',function () {
    this.test ='';
});
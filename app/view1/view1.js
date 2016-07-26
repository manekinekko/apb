'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

  this.btn1 = (event) => {
    console.log(event);
  };

  this.btn2 = (event) => {
    console.log(event);
  };

  this.btn3 = (event) => {
    console.log(event);
  };


}]);

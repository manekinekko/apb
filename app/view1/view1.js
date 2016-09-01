'use strict';

angular.module('app.view1', ['ngRoute', 'robdodson.ce-bind'])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl as $ctrl'
  });

}])

.controller('View1Ctrl', [function() {

  this.message = 'message from angular';

  this.model = {};

  this.OnSelectedItemChanged = (selectedEvent) => {
    this.selectedIndex = selectedEvent.detail + 1;
  }

  this.btn1 = (event) => {
    console.log(event);
    alert('clicked from angular');
  };

  this.btn2 = (event) => {
    console.log(event);
    alert('clicked from angular');
  };

  this.btn3 = (event) => {
    console.log(event);
    alert('clicked from angular');
  };


}])

.directive('bindPolymerEvent', ['$rootScope', function($rootScope) {
  return {
    restrict: 'A',
    link: function(s, e, a, c) {
      e.on('selected-item-changed', (e) => {

        // event coming from Polymer
        $rootScope.$apply(() => {
          s.$ctrl.OnSelectedItemChanged(e);
        });
      })
    }
  }
}]);

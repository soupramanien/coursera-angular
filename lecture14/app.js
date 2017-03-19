(function(){
  'use strict';
  angular.module("counterApp", [])
  .controller("counterCtrl", counterCtrl);

  counterCtrl.inject = ['$scope'];
  function counterCtrl($scope) {
    $scope.counter = 0;
    $scope.showNoOfWatchers = function(){
      console.log($scope.$$watchersCount);
    }
    $scope.upCounter = function(){
      console.log($scope.counter++);
    }
    $scope.$watch(function () {
      console.log("digest loop fired");
    })
    // $scope.$watch('counter', function (newValue, oldValue) {
    //   console.log(newValue, oldValue);
    // });
  }


})();

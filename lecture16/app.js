(function(){
  'use strict';
  angular.module("counterApp", [])
  .controller("counterCtrl", counterCtrl);

  counterCtrl.inject = ['$scope'];
  function counterCtrl($scope) {
    $scope.firstName = "soupramanien";
    $scope.showNoOfWatchers = function () {
      $scope.noWatchers = $scope.$$watchersCount;

    }
    $scope.logFullName = function () {
      $scope.fullName = $scope.firstName + " BOUVANESVARY";
      console.log($scope.fullName);
    }
  }


})();

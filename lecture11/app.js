(function(){
  'use strict';
  angular.module("msgApp", [])
  .controller("msgAppCtrl", msgCtrl);

  msgCtrl.inject = ['$scope'];
  function msgCtrl($scope) {
    $scope.name = "Mani";
    $scope.state = "tired";
    $scope.sayMsg = function(){
      return "I'm a smart guy";
    }
    $scope.feedMani = function(){
      $scope.state = "happy";
    }
  }


})();

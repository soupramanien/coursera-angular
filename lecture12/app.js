(function(){
  'use strict';
  angular.module("msgApp", [])
  .controller("msgAppCtrl", msgCtrl);

  msgCtrl.inject = ['$scope', '$filter'];
  function msgCtrl($scope, $filter) {
    $scope.name = "Mani";
    $scope.state = "tired";
    $scope.cost = .45;
    $scope.sayMsg = function(){
      var msg = "I'm a smart guy";
      return $filter('uppercase')(msg);
    }
    $scope.feedMani = function(){
      $scope.state = "happy";
    }
  }


})();

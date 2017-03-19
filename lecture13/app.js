(function(){
  'use strict';
  angular.module("msgApp", [])
  .controller("msgAppCtrl", msgCtrl)
  .filter("intelligent", IntelligentFilter)
  .filter("truth", TruthFilter);

  msgCtrl.inject = ['$scope', '$filter', 'intelligentFilter'];
  function msgCtrl($scope, $filter, intelligentFilter) {
    $scope.name = "Mani";
    $scope.state = "tired";
    $scope.cost = .45;
    $scope.sayMsg = function(){
      var msg = "I'm a smart guy";
      return $filter('uppercase')(msg);
    }
    $scope.sayIntelligentMsg = function(){
      var msg = "I'm a smart guy";
      msg = intelligentFilter(msg);
      return msg;
    }
    $scope.feedMani = function(){
      $scope.state = "happy";
    }
  }
  function IntelligentFilter() {
    return function(input) {
      input = input || "";
      input = input.replace("smart", "intelligent");
      return input;
    }
  }
  function TruthFilter(){
    return function (input, target, replace) {
        input = input || "";
        input = input.replace(target, replace);
        return input;
    }
  }


})();

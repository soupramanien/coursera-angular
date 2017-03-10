(function(){
  angular.module("dependencyInjection", []).
  controller("dependencyInjectionCtrl", DICtrl);

  function DICtrl($scope, $filter, $injector) {
    $scope.name = "Mani";
    $scope.upper = function() {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    }
    console.log($injector.annotate(DICtrl));
  }

  function annotateMe(hsdh,klqskd,sdkqlsk) {
    return "jkjk";
  }

}());

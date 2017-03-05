(function(){
  angular.module("nameCalculator", [])
  .controller("nameCalculatorCtrl", function($scope) {
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayNumeric = function () {
      var totalNameValue = calculateNumericForString($scope.name);
      $scope.totalValue = totalNameValue;
    }
  });
  function calculateNumericForString(name) {
    var totalNumericValue = 0;
    for (var i = 0; i < name.length; i++) {
      totalNumericValue += name.charCodeAt(i);
    }
    return totalNumericValue;
  }
})();

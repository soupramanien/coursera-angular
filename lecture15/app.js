(function(){
  'use strict';
  angular.module("counterApp", [])
  .controller("counterCtrl", counterCtrl);

  counterCtrl.inject = ['$scope', '$timeout'];
  function counterCtrl($scope, $timeout) {
    $scope.counter = 0;
    $scope.upCounter = function(){
      $timeout(function (){
        $scope.counter++;
        console.log("incremented");
      }, 2000);
    }

    // $scope.upCounter = function(){
    //   setTimeout(function (){
    //     $scope.counter++;
    //     console.log("incremented");
    //     $scope.$digest();
    //   }, 2000);
    // }
    // $scope.upCounter = function(){
    //     setTimeout(function (){
    //       $scope.$apply(function () {
    //         $scope.counter++;
    //         console.log("incremented");
    //       });
    //   }, 2000);
    // }
    // $scope.$watch('counter', function (newValue, oldValue) {
    //   console.log(newValue, oldValue);
    // });
  }


})();

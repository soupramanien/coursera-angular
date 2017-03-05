(function(){
  'use strict';

  angular.module('myFirstApp', [])

  .controller('myFirstController', function($scope){
    $scope.name = 'Soupramanien';
    $scope.askName = function(){
      return "What's your name ?";
    };
  });
})();

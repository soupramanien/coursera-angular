(function(){
  'use strict';

  var shoppingList1 = [
    'milk', 'jffkdsj', 'chocolate', 'cookie'
  ];

  var shoppingList2 = [
    {
      name : "milk",
      quantity : "50"
    },
    {
      name : "jffkdsj",
      quantity : "45"
    },
    {
      name : "chocolate",
      quantity : "50"
    },
    {
      name : "cookie",
      quantity : "45"
    }
  ]

  angular.module("shoppingListApp", [])
  .controller("shoppingListCtrl", shoppingListCtrl);

  shoppingListCtrl.inject = ['$scope'];
  function shoppingListCtrl($scope) {
    $scope.shoppingList1 = shoppingList1;
    $scope.shoppingList2 = shoppingList2;
    $scope.addItem = function () {
      var item = {
        name : $scope.newItem,
        quantity : $scope.newQuantity
      }
      $scope.shoppingList2.push(item);
    }
  }


})();

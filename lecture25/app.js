(function(){
  'use strict';

  angular.module("ShoppingListApp", [])
  .controller("ShoppingListCtrl", ShoppingListCtrl)
  .service("WeightLossFilterService", WeightLossFilterService)
  .service("ShoppingListService", ShoppingListService);


  ShoppingListCtrl.$inject = ['ShoppingListService'];
  function ShoppingListCtrl(ShoppingListService) {
    var list = this;
    list.itemName = "";
    list.itemQuantity = "";
    var shoppingList = ShoppingListService;
    list.addItem = function () {
        shoppingList.addItem(list.itemName, list.itemQuantity);
      }
    list.removeItem = function (itemIndex) {
      shoppingList.removeItem(itemIndex);
    }
    list.items = shoppingList.getItems();
  }

  ShoppingListService.$inject = ['$q','WeightLossFilterService'];
  function ShoppingListService($q, WeightLossFilterService) {
    var service = this;
    var items = [];

    // service.addItem = function (itemName, itemQuantity) {
    //   var promise = WeightLossFilterService.checkName(itemName);
    //   promise.then(function (response) {
    //     var nextPromise = WeightLossFilterService.checkQuantity(itemQuantity);
    //     nextPromise.then(function (result) {
    //       var item = {
    //         name : itemName,
    //         quantity : itemQuantity
    //       };
    //       items.push(item);
    //     }, function (errorMessage) {
    //       console.log(errorMessage.message);
    //     });
    //   }, function (errorMessage) {
    //     console.log(errorMessage.message);
    //
    //   });
    //
    // };
    // service.addItem = function (itemName, itemQuantity) {
    //   var promise = WeightLossFilterService.checkName(itemName);
    //
    //   promise.then(function (response) {
    //     return WeightLossFilterService.checkQuantity(itemQuantity);
    //   }).
    //   then(function () {
    //     var item = {
    //       name : itemName,
    //       quantity : itemQuantity
    //     };
    //     items.push(item);
    //   }).
    //   catch(function (errorMessage) {
    //     console.log(errorMessage.message);
    //   });
    // };

    service.addItem = function (itemName, itemQuantity) {
      var namePromise = WeightLossFilterService.checkName(itemName);
      var quantityPromise = WeightLossFilterService.checkQuantity(itemQuantity);

      $q.all([namePromise, quantityPromise]).
      then(function (response) {
        var item = {
          name : itemName,
          quantity : itemQuantity
        };
        items.push(item);
      }).catch(function (errorMessage) {
        console.log(errorMessage.message);
      })
    };
    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    };

    service.getItems = function() {
      return items;
    };

  }
  WeightLossFilterService.$inject = ['$q', '$timeout'];
  function WeightLossFilterService($q, $timeout) {
    var service = this;
    service.checkName = function (name) {
      var deffered = $q.defer();
      var result = {
        message : ""
      };
      $timeout(function () {
        if (name.toLowerCase().indexOf('cookie') === -1) {
          deffered.resolve(result);
        }
        else {
          result.message = "stay away from cookies";
          deffered.reject(result);
        }
      }, 3000);
      return deffered.promise;
    };

    service.checkQuantity = function (quantity) {
      var deffered = $q.defer();

      var result = {
        message : ""
      };
      $timeout(function () {
        if (quantity < 6) {
          deffered.resolve(result);
        }
        else {
          result.message = "That's too much"
          deffered.reject(result);
        }
      }, 1000);
      return deffered.promise;
    };
  }
})();

(function(){
  'use strict';

  angular.module("shoppingListApp", [])
  .controller("shoppingListAddCtrl", shoppingListAddCtrl)
  .controller("shoppingListShowCtrl",shoppingListShowCtrl)
  .service("ShoppingListService", ShoppingListService);

  shoppingListAddCtrl.inject = ['ShoppingListService'];
  function shoppingListAddCtrl(ShoppingListService) {
    var itemAdder = this;
    itemAdder.itemName = "";
    itemAdder.itemQuantity = "";
    itemAdder.addItem = function () {
      ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    }
  }

  shoppingListShowCtrl.inject = ['ShoppingListService'];
  function shoppingListShowCtrl(ShoppingListService) {
    var showList = this;
    showList.items = ShoppingListService.getItems();

    showList.removeItem = function (itemIndex) {
      ShoppingListService.removeItem(itemIndex);
    }

  }


  function ShoppingListService() {
    var service = this;
    var items = [];

    service.addItem = function (itemName, itemQuantity) {
      var item = {
        name : itemName,
        quantity : itemQuantity
      }
      items.push(item);
    }
    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    }
    service.getItems = function () {
      return items;
    }

  }
})();

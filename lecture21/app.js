(function(){
  'use strict';

  angular.module("shoppingListApp", [])
  .controller("shoppingList1Ctrl", shoppingList1Ctrl)
  .controller("shoppingList2Ctrl",shoppingList2Ctrl)
  .factory("ShoppingListServiceFactory", ShoppingListServiceFactory);

  shoppingList1Ctrl.inject = ['ShoppingListServiceFactory'];
  function shoppingList1Ctrl(ShoppingListServiceFactory) {
    var list1 = this;
    list1.itemName = "";
    list1.itemQuantity = "";
    var shoppingList = ShoppingListServiceFactory();
    list1.addItem = function () {
      shoppingList.addItem(list1.itemName, list1.itemQuantity);
    }
    list1.removeItem = function (itemIndex) {
      shoppingList.removeItem(itemIndex);
    }
    list1.items = shoppingList.getItems();
  }

  shoppingList2Ctrl.inject = ['ShoppingListServiceFactory'];
  function shoppingList2Ctrl(ShoppingListServiceFactory) {
    var list2 = this;
    list2.itemName = "";
    list2.itemQuantity = "";
    var shoppingList = ShoppingListServiceFactory(3);
    list2.addItem = function () {
      try{
        shoppingList.addItem(list2.itemName, list2.itemQuantity);
      }
      catch(error){
        list2.errorMessage = error.message;
      }

    }
    list2.removeItem = function (itemIndex) {
      shoppingList.removeItem(itemIndex);
    }
    list2.items = shoppingList.getItems();
  }


  function ShoppingListService(maxItems) {
    var service = this;
    var items = [];

    service.addItem = function (itemName, itemQuantity) {
      if((maxItems === undefined) || (maxItems !== undefined && items.length < maxItems)){

        var item = {
          name : itemName,
          quantity : itemQuantity
        }
        items.push(item);
      }
      else{
        throw new Error("max items " + maxItems + " reached !");
      }
    }
    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    }

    service.getItems = function() {
      return items;
    }

  }

  function ShoppingListServiceFactory() {
    var factory = function (maxItems) {
      return new ShoppingListService(maxItems);
    }
    return factory;
  }
})();

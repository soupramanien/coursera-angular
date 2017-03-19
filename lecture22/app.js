(function(){
  'use strict';

  angular.module("shoppingListApp", [])
  .controller("shoppingList2Ctrl", shoppingList2Ctrl)
  .provider("ShoppingListService", ShoppingListServiceProvider)
  .config(Config);

  Config.inject = ['ShoppingListServiceProvider'];
  function Config(ShoppingListServiceProvider) {
    ShoppingListServiceProvider.defaults.maxItems = 2;
  }

  shoppingList2Ctrl.inject = ['ShoppingListService'];
  function shoppingList2Ctrl(ShoppingListService) {
    var list2 = this;
    list2.itemName = "";
    list2.itemQuantity = "";
    var shoppingList = ShoppingListService;
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
  function ShoppingListServiceProvider() {
    var provider = this;

    provider.defaults = {
      maxItems : 10
    }

    provider.$get = function () {
      return new ShoppingListService(provider.defaults.maxItems);
    }
  }

  function ShoppingListServiceFactory() {
    var factory = function (maxItems) {
      return new ShoppingListService(maxItems);
    }
    return factory;
  }
})();

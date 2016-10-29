(function(){
'use strict';
angular.module('ShoppingListCheck',[])
.controller('ShoppingListController1',ShoppingListController1)
.controller('ShoppingListController2',ShoppingListController2)
.factory('ShoppingListFactory',ShoppingListFactory);

ShoppingListController1.$inject=['ShoppingListFactory'];
ShoppingListController2.$inject=['ShoppingListFactory'];
function ShoppingListController1(ShoppingListFactory) {
  var list1=this;
  var shoppinglist=ShoppingListFactory(1);
  list1.items=shoppinglist.getItems();
  list1.itemName="";
  list1.itemQuantity="";
  list1.addItem=function () {
    try{
    shoppinglist.addItem('10','Cookies');
  }
  catch(error){
    list.errorMessage=error.message;
  }
}
  list1.removeItem=function(itemIndex){
    shoppinglist.removeItem(itemIndex);

  };
}

function ShoppingListService(minItems)
{
var service=this;
var items=[];
service.addItem= function(itemName,itemQuantity) {
  if(minItems==1)
  {
var item={
  name:itemName,
  quantity:quantity
};
items.push(item);
  }
  else {
    throw new Error("Everything is bought");
  }

};
service.removeItem=function (itemIndex) {
  items.splice(itemIndex,1);
};
service.getItems=function () {
  return items;
};
}
function ShoppingListFactory(){
  var factory= function(minItems)
  {
  return new ShoppingListService(minItems);
  };
  return factory;
}
})();

(function(){
'use strict';
angular.module('ShoppingListCheck',[])
.controller('ShoppingListController1',ShoppingListController1)
.controller('ShoppingListController2',ShoppingListController2)
.service('ShoppingListService',ShoppingListService);
ShoppingListController1.$inject=['ShoppingListService'];
function ShoppingListController1(ShoppingListService)
{
  var list1=this;
  ShoppingListService.addItem('Cookies','10');
  ShoppingListService.addItem('Soaps','10');
  ShoppingListService.addItem('Bootles','10');
  ShoppingListService.addItem('Eggs','10');
  ShoppingListService.addItem('Icecream','10');
  list1.toBuy=ShoppingListService.getItems();
  list1.removeItem=function(itemIndex){
  ShoppingListService.removeItem(itemIndex);
  if(list1.toBuy.length<=0)
  {
  list1.errorMessage="Everything is bought!";
  }
}
}
ShoppingListController2.$inject=['ShoppingListService'];

function ShoppingListController2(ShoppingListService)
{
var list2=this;
//list2.len=ShoppingListService.oneEntry();
try {
  list2.Bought=ShoppingListService.getBoughtItems();
}
catch (e) {

list2.errorMessage="Nothing";

}

}
function ShoppingListService()
{
var service = this;
var toBuy=[];
var Bought=[];
var len;
service.addItem= function(itemName,itemQuantity) {

var item1={
  name:itemName,
  quantity:itemQuantity
};

toBuy.push(item1);
 };

service.removeItem=function (itemIndex) {
  Bought.push(toBuy[itemIndex]);
   len=1;
  toBuy.splice(itemIndex,1);
};
service.getItems=function () {
  return toBuy;
};
service.getBoughtItems=function()
{
  try{
return Bought;
}
catch(error)
{
  list2.errorMessage="Nothing";
}
};

}
})();

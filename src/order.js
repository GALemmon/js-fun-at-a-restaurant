
function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {deliveryOrders.push(order);
  };
  return deliveryOrders;
};

//---------------------------------------

function refundOrder(num, deliveryOrders) {
  for (i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].orderNumber === num) {
    deliveryOrders.splice(i, 1);
  };
};
  return deliveryOrders;
};

//-------------------------------------------

function listItems(delor) {
  var items = '';
  for (i=0; i < delor.length; i++) {
    var foodItem = delor[i].item;
    if(i == 0) items += foodItem;
    else items += ', ' + foodItem;
  };
  return items;
};

//------------------------------------------

function searchOrder(ordersList, searchItem) {
  var success
  for (i = 0; i < ordersList.length; i++) {
    if (searchItem === ordersList[i].item) {
      success = true;
      };
    }
    if (success === true) {return true;
    } else {return false;
  };
};

//-------------------------------------------

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}


function createRestaurant(nameInput) {
 var restaurant = {
   name: nameInput,
   menus: {
     breakfast: [],
     lunch: [],
     dinner: [],
   },
 };
 return restaurant;
};

//------------------------------------------

function addMenuItem(restaurantName, menuItem) {
  var targetMenu = restaurantName.menus[menuItem.type];
  function itemsMatch(item) {
    return item.name === menuItem.name;
  };
  var isInMenu = targetMenu.find(itemsMatch) !== undefined;
  if (isInMenu === false) {
  targetMenu.push(menuItem);
  };
};

//-------------------------------------------

function removeMenuItem(restaurantName, itemName, itemType) {
  var targetMenu = restaurantName.menus[itemType];
  function notTargetItem(item) {
    return item.name !== itemName;
  };
  function isTargetItem(item) {
    return item.name === itemName;
  };
  var isInMenu = targetMenu.find(isTargetItem) !== undefined;
  if (isInMenu) {
  var updatedMenu = targetMenu.filter(notTargetItem);
  restaurantName.menus[itemType] = updatedMenu;
  return `No one is eating our ${itemName} - it has been removed from the ${itemType} menu!`
  } else {return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
};
};

//------------------------------------------

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}

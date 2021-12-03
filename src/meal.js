
function nameMenuItem(foodItem) {
  return `Delicious ${foodItem}`;
};

//------------------------------------

function createMenuItem(food, price, type) {
  var menuItem = {
    name: food,
    price: price,
    type: type
  };
  return menuItem;
};

//-------------------------------------

function addIngredients(item, ingredients){
  if (!ingredients.includes(item)) {
  ingredients.push(item);
  }
  return ingredients;
};

//---------------------------------------

function formatPrice(x) {
  return '$' + x;
};

//------------------------------------------

function decreasePrice(ip) {
  return ip - (ip * .1);
};

//--------------------------------------------

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  };
  return recipe;
}

//--------------------------------------------

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}

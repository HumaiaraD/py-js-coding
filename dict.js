let recipeBook = {
     "Pancakes": ["flour", "milk", "eggs", "sugar"],
    "Salad": ["lettuce", "tomato", "cucumber", "olive oil"]
};

console.log(recipeBook["Pancakes"]);
recipeBook["Smoothie"] = ["banana", "milk", "honey"];
recipeBook["Smoothie"].push("blueberries");
console.log(recipeBook);
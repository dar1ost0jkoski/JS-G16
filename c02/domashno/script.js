var fruit = ["banana", "apple", "orange", "watermelon"];
console.log("fruit", fruit);
fruit.shift();
console.log(fruit.indexOf("orange"));
fruit.push(fruit.splice(fruit.indexOf("orange"), 1).pop());



var vegetable = ["carrot", "tomato", "pepper", "lettuce"];
console.log("vegetable", vegetable);
vegetable.pop();
console.log(vegetable.length)
vegetable.splice(3, 0, "3");

const food = fruit.concat(vegetable);
console.log("Food", food);
food.splice(4, 2);

console.log("food", food);


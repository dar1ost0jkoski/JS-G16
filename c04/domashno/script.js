var size = 8;
var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += "■";
    else
      board += "▢";
  }
  board += "\n";
}
console.log(board);


var size = 10;
var pyramid = "";
for(var i = 0; i < size; i++) {
  pyramid = pyramid + ("■");
  console.log(pyramid)
}
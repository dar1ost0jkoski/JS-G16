var Arr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
var even = [];
var odd = [];
for (var i = 0; i < Arr.length; i++){
    if(Arr[i] % 2 === 0){
        even.push(Arr[i]); 
    }
    else {
        odd.push(Arr[i]);
    }
    console.log(even);
    console.log(odd);
}

let x = [`■`];
let y = [];
for (let i = 0; i<=10;i++){
    y += x;
    console.log(y);
}

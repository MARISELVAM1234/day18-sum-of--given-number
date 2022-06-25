// let x = parseInt(prompt());
// total = 0;
// console.log("x is ", x);
// for(i =  0; i<x; i++){
//     if (x>0){
//     total =(total+(x%10));
//     x = Math.floor(x /10) ;  
// }
// }
// console.log("sum of given number is", total );


let x = parseInt(prompt());
var total = 0;
console.log("x is", x);
 while (x > 0) {
    let lastDigit = x % 10;
    total = total + lastDigit;
    if (lastDigit >= 5) {
        x = x - lastDigit;
    }
    x = Math.round(x / 10);

} console.log("sum of given number is", total);
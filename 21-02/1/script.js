/*********** и (&&) *****************/
// 1) true + false = false
let num1 = 11;
let num2 = 9;
let result = num1 === 11 && num2 ===11;
console.log(result); //false

// 2) false + true = false
let num3 = 8;
let num4 = 5;
let result2 = num3 ===5 && num4 ===5;
console.log(result2); //false


// 3) false + false = false
let num5 = 7;
let num6 = 5;
let result3 = num5 ===3 && num6 ===3;
console.log(result3);  //false

// 4) true + true = true
let num7 = 4;
let num8 = 4;
let result4 = num7 ===4 && num8 ===4;
console.log(result4); //true


/*********** или (||) *****************/
// 1) true + false = true
let hour1 = 12;
let hour2 =10;
let result5 = hour1 ===12 || hour2 ===10;
console.log(result5) //true

// 2) false + true = true;
let age1 = 9;
let age2 = 11;
let result6 = age1===9 || age2 ===11;
console.log(result6);  //true

// 3) true + true = true;
let min1 = 7;
let min2 = 7;
let result7 = min1 ===7 || min2 ===7;
console.log(result7); //true

// 4) false + false = false;
let hour8 = 5;
let hour9 = 2;
let result8 = hour8 ===1 || hour9 ===1;
console.log(result8); //false



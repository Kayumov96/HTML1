// function getPosition(){
//     var a = document.querySelector(".childDiv").style.top ="80%";
//     a.style.transition ="2s"
//     console.log(a)
// }
// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     console.log(number + " is Even");
//   }
// }
// evenOrOdd(2);
//================================================================
// var array1 = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];

// function countSheeps(arrayOfSheep) {
//   var missed = [];
//   var total = [];
//   arrayOfSheep.forEach((value, i) => {
//     if (value === true) {
//       total.push(value);
//     } else if (value === false) {
//       missed.push(value);
//     }
//   });
//   return console.log(
//     total.length,
//     `There are ${total.length} sheeps in total, and ${missed.length} missed`
//   );
// }
// countSheeps(array1);
//================================================================
// function noBoringZeros(n) {
//   var total = 0;
//   for (let i = 0; i < n.length - 1; i++) {
//     if (n[i] > 0) {
//       total += n[i];
//     }
//     console.log(total);
//   }
// }
// noBoringZeros("103450000");
//================================================================
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, [11, 12, [13, 15]]],
//   [[16], 17],
// ];
// TotalSum = (a, b) => a + b;
// let total = matrix.flat(3).reduce(TotalSum);
// console.log(matrix.flat(3).reduce(TotalSum));
//=========
let num = [1, 1, 2, 4, 6, 8, 7, 8];
let a;
let b;
let v = [];
for (i of num) {
  a = num[i];
  console.log(a);
  for (j of num) {
    b = num[j];
  }
  if (a[i] === b[j]) {
    v.push[i + j];
  }
}

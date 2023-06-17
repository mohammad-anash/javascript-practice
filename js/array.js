// function numArgs(arr){
//     return arr.length;
// }

// console.log(numArgs());
// console.log(numArgs("foo"));
// console.log(numArgs("foo", "bar"));
// console.log(numArgs(true, false));
// console.log(numArgs({}));

// function mod(num1, num2){
//     return  num1 % num2;
// }

// console.log(mod(5, 2));
// console.log(mod(218, 5));
// console.log(mod(6, 3));

// function keyboardMistakes(name) {
//    // return name.replace(/5/g, 'S').replace(/4/g, 'A').replace(/1/g, 'I');
//       if (name == 'MUB45H1R') {
//           console.log('MUBASHIR')
//       } else if(name == "DUBL1N") { 
//          console.log('DUBLIN')    
//       }  else if(name == "51NG4P0RE") { 
//          console.log('SINGAP0RE')    
//       }  

//    }

// console.log(keyboardMistakes("MUB45H1R"));
// console.log(keyboardMistakes("DUBL1N"));
// console.log(keyboardMistakes("51NG4P0RE"));

// function find(arr, idx){
//   return arr.findIndex(1, 3, 5, 8);
// }
// find();

// const arr = [
//     ["m", "u", "b"],
//     ["a", "s", "h"],
//     ["i", "r", "1"]
// ];

// function reverseCapitalize(name){
//     return name.split("").reverse().join();
// }

// console.log(reverseCapitalize("abc"));
// console.log(reverseCapitalize("hellothere"));
// console.log(reverseCapitalize("input"));

// function getLastItem(arr){
//     return arr.pop()
// }

// console.log(getLastItem([1, 2, 3]));
// console.log(getLastItem(["cat", "dog", "duck"]));
// console.log(getLastItem([true, false, true]));

// function arrayToString(arr){
//     return arr.join("");
// }

// console.log(arrayToString([1, 2, 3, 4, 5, 6]));
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

// function concat(arr, arr1){
//    return arr.concat(arr1)
// }

// console.log(concat([1, 3, 5], [2, 6, 8]));
// console.log(concat([7, 8], [10, 9, 1, 1, 2]));
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));

// function find(arr, idx){
//     return arr.indexOf(idx)
// }
// console.log(find(["hi", "edabit", "fgh", "abc"], "fgh"));
// console.log(find(["Red", "blue", "Blue", "Green"], "blue"));
// console.log(find(["a", "g", "y", "d"], "d"));
// console.log(find(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));

// function sumArray(arr){
//    return arr.reduce(function (total, value){
//      return total + value
//    })
// }

// console.log(sumArray([1, 2, 3, 4, 5]));
// console.log(sumArray([-1, 0, 1]));
// console.log(sumArray([0, 4, 8, 12]));

// function search(arr, idx){
//    return arr.indexOf(idx)
// }

// console.log(search([1, 5, 3], 5));
// console.log(search([9, 8, 3], 3));
// console.log(search([1, 2, 3], 4));

// function check(arr, idx){
//      return arr.includes(idx)
// }

// console.log(check([1, 2, 3, 4, 5], 3));
// console.log(check([1, 1, 2, 1, 1], 3));
// console.log(check([5, 5, 5, 6], 5));
// console.log(check([], 5));


// function arrBetween(num1, num2, arr) {
//     let name = [];
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index]
//         if (element > num1 && element < num2) {
//             name.push(element);
//         }
//     }
//     return name
// }

// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));
// console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));
// console.log(arrBetween(7, 32, [1, 2, 3, 78]));

// function toNumberArray(arr){
//    return arr.join();
// }

// console.log(toNumberArray(["9.4", "4.2"]));
// console.log(toNumberArray(["91", "44"]) );
// console.log(toNumberArray(["9.5", "8.8"]));

// function parseArray(arr){
//    return arr.parseFloat();
// }

// console.log(parseArray([1, 2, "a", "b"]))
// console.log(parseArray(["abc", 123, "def", 456]))
// console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]))
// console.log(parseArray([]))

// function lonelyInteger(arr){
//      arr.filter(function (value){
//          return value >= 3
//     });
// }

// console.log(lonelyInteger([1, -1, 2, -2, 3]));
// console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2]));
// console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105]));

// const arr = [1, 2, 3, 4, 5];

// for (let index = 0; index < arr.length; index++) {
//    if (arr[index] == 3 ?true: false)

// }


// function checkArray() {
//   const arr = [1, 2, 3, 4];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) {
//       return true
//     }
//   }
//   return false
// }
// console.log(checkArray());

// function minMax(name){

// }

// console.log(minMax([1, 2, 3, 4, 5]));
// console.log(minMax([2334454, 5]));
// console.log(minMax([1]));

// function myfunction(num){
//     for (let index = 1; index <11; index++) {
//          document.write(`${num} x ${index} = ${num*index}`);
//          document.write('<br>');
//     }
// }

// myfunction(9);

// function myfunction(num){
//     for (let index = 1; index < 11; index++) {
//         document.write(`${num} x ${index} = ${num*index}`);
//         document.write('<br>')
//     }

// }

// myfunction(2)

// function parseArray(name){
//     return name.join("");
// }

// console.log(parseArray([1, 2, "a", "b"]) ); 
// console.log(parseArray(["abc", 123, "def", 456])); 
// console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) ); 
// console.log(parseArray([])); 

// vowells = a, e, i, o, u,

const arr = ['apple', 'mango', 'orange'];
 for (let index = 0; index < arr.length; index++) {
     if (arr[index]  == 'apple') {
         console.log('aeppl')
     } else{
        console.log('mango')
     }
 }
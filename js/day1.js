// function

// function addition(num1, num2) {
//     //    return +num1 + +num2
//     //   return Number(num1) + Number(num2)
//     // return parseInt(num1) + parseInt(num2)
//     // return (num1 / 1) + (num2 / 1);
//     // return (num1 - 1) + (num2 - 1) + 2;
//     return (1 * num1) + (1 * num2);
// }


// console.log(addition(3, 2));
// console.log(addition(-3, -6));
// console.log(addition(7, 3));
// console.log(addition('7', '3'));
// console.log(addition('7', 3));


// function addition(num1) {
//    return (+ num1 + 1);
//    return Number(1 +  +num1);
//    return parseInt(+num1 + 1);
//    return (num1 * 1) + 1
//    return (num1 / 1) + 1;
//   return (+num1 - 1) + 1;


// }
// console.log(addition(0));
// console.log(addition('9'));
// console.log(addition('-3'));

// function convert(num1) {
//     return (num1 * 60);
// }

// // console.log(convert(5));
// // console.log(convert(3));
// // console.log(convert(2));
// // console.log(convert('2'));


// convert(5);
// convert(3);
// convert(2);
// convert('2');


// function triArea(num1,num2) {
//       return (num2 * num1) / 2;
// }

//   console.log(triArea(3, 2)) // 3
//   console.log(triArea(7, 4)) // 14
//   console.log(triArea(10, 10)) // 50

// day 4

// 1. // Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.

// function divide(integer) {
//   return (100 % integer) === 0;
// }


// console.log(divide(100));

// 2.  Create a function that takes a string and returns it as an integer.

// function stringInt(str) {
//     //    return Number(str);
//     //   return +str
//     // return parseInt(str)
//     //   return parseFloat(str);
//     // return (str - 0);
// }
// console.log(stringInt("6"))
// console.log(stringInt("1000"))
// console.log(stringInt("12"))
// I've written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Fix the error.
// function isOdd(isodd){
//    return  isodd % 2 === 0 ;
// }

// console.log(isOdd(20))

// console.log(isOdd(-5))
// console.log(isOdd(25))
// console.log(isOdd(0))


// / 42 ==> Flip the Boolean
//     Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.
//     Create a function that returns the opposite of the given boolean, as a number.

//  function flipBaloon(boolean){
//      return +!boolean;
//  }
// console.log(flipBaloon(true))
// console.log(flipBaloon(false))
// console.log(flipBaloon(1))


// /     Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function but use an "arrow function".
// const fun = name => `hello ${name}`

// console.log(fun("Gerald")) // hello
// console.log(fun("Tiffany")) // hello
// console.log(fun("Ed")) // hello Ed

// 45 ==> To the Power of _____
//     Create a function that takes a base number and an exponent number and returns the calculation.
// function calculteExponent(num1, num2){
//     // return (num2 ** num1);
//     // return Math.pow(num2, num1);
// }

// console.log(calculteExponent(5, 5))
// console.log(calculteExponent(10, 10))
// console.log(calculteExponent(3, 3))


// 47 ==> Concatenating Two Integer Arrays
//     Create a function to concatenate two integer arrays.

// function concat(arr, arr1){
//     // return arr.concat(arr1);
//     // return [...arr,...arr1]
// }
// console.log(concat([1, 3, 5], [2, 6, 8]))
// console.log(concat([7, 8], [10, 9, 1, 1, 2]))
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]))

// day 5

// 48 ==> Find the Index (Part 1)
//     Create a function that finds the index of a given item. If the item is not present, return -1.

// function search(arr, item){
//     return arr.indexOf(item);
// }
// console.log(search([1, 5, 3], 5))
// console.log(search([9, 8, 3], 3))
// console.log(search([1, 2, 3], 4))
// console.log(search(["hi", "edabit", "fgh", "abc"], "fgh"));


// 50 ==> Check if an Array Contains a Given Number
//     Write a function to check if an array contains a particular number

// function check(arr, item){
// //   return arr.includes(item);

// for(let i = 0; i < arr.length; i++){
//     if (!arr === item) {
//         return false;
//     }

//     if(arr[i] === item){
//       return true;
//     }

//   }
//   return false
// }
// console.log(check([1, 2, 3, 4, 5], 3))
// console.log(check([1, 1, 2, 1, 1], 3))
// console.log(check([5, 5, 5, 6], 5))
// console.log(check([], 5));


// 46 ==> Word without First Character
//     Create a function that takes a word and returns the new word without including the first character.
// function newWord(word){
//     // return word.substr(1,5);
//     // return word.slice(1)
//     // return word.substring(1, 6)
//     let newstring = "";
//     for (let index = 1; index < word.length; index++) {
//         newstring += wrod[index];
//     }
//     return newstring;
// }
// console.log(newWord("apple"))
// console.log(newWord("cherry"))
// console.log(newWord("plum"))

// Concatenate First and Last Name into One String
//  Given two strings, firstName and lastName, return a single string in the format "last, first
//  function concatName(name1, name2) {
//     //  return name2.concat(name1);
//     // return `${name2} ${name1}`
//  }
//  console.log(concatName("First", "Last"))
//  console.log(concatName("John", "Doe"))
//  console.log(concatName("Mary", "Jane"))


// // Create a function that returns how many possible outcomes can come from a certain number of switches (on / off).

// function posCom(num1){
//     // return 2 * num1;
//     // return Math.pow(num1, 2)
//     return 2 ** num1
// }

// console.log(posCom(1) )
// console.log(posCom(3) )
// console.log(posCom(10) )

// function shiftToLeft(num1, num2){
//     return Math.pow(num1,num2)
// }

// console.log(shiftToLeft(5, 2) ) //,100
// console.log(shiftToLeft(10, 3) ) // 8000
// console.log(shiftToLeft(-32, 2) ) // 408

// function makePair(num1, num2){
//     return Array(num1, num2);
// }

// console.log(makePair(1, 2) );
// console.log(makePair(51, 21));
// console.log(makePair(512124, 215));

// function drop(arr, item){
//    return arr.slice(item)
// }

// console.log(drop([1, 2, 3], 1) );
// console.log(drop([1, 2, 3], 2) );
// console.log(drop([1, 2, 3], 5) );
// console.log(drop([1, 2, 3], 0) );


// drop([1, 2, 3], 1);, 3]
// drop([1, 2, 3], 2);]
// drop([1, 2, 3], 5);
// drop([1, 2, 3], 0);, 2, 3]

// function getVoteCount(upvotes, downvotes){
//    return (upvotes - downvotes);
// }

// console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));

// function reverse(arr){
//    return arr.reverse();
// }

// console.log(reverse([1, 2, 3, 4])); 
// console.log(reverse([9, 9, 2, 3, 4]));
// console.log(reverse([]))

// function sumPolygon(num1){
//     return (num1 - 2) * 180;
// }

// console.log(sumPolygon(3));
// console.log(sumPolygon(4));
// console.log(sumPolygon(6));

// let name2 = 'edabit'

// function nameString(name){
// //    return (name + `${name2}`);
// }


// console.log(nameString("Mubashir"));
// console.log(nameString("Matt"));
// console.log(nameString("javaScript"));

// function split(name) {
//     return name.split('a');
// }


// console.log(split("abcde"));
// console.log(split("Hello!"));
// console.log(split("What's the time?"));

function table(num){
    for (let index = 1; index < 11; index++) {
        document.write(`${num} x ${index} = ${num * index}`);
        document.write('<br>')   
    }
}

table(6)

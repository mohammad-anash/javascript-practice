// day 3



// function getFirstValue(arr) {
//     // // //    return arr.shift()
//     // //     //   return arr[0];
//     // //     // return +arr.slice(0, 1).join("");

//     // for(let i = 0; i < arr.length; i++){
//     //     if(i === 1) return;
//     //     return arr[i]
//     //   }

//     for (i = 0; i < arr.length; i++) {
//         if (i === 1) return;
//             return arr[i]
//     }
// }



// console.log(getFirstValue([1, 2, 3]))
//   console.log(getFirstValue([80, 5, 100]))
//   console.log(getFirstValue([-500, 0, 50]))




2. // ==> Frames Per Second
//     Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// cons    frames(1, 1)
// cons    frames(10, 1)
// cons    frames(10, 25)
//     FPS stands for "frames per second" and it's the number of frames a computer screen shows some second.
//     Assume the screen produces 60 frames some second.

// function frames(minutes, fps) {
//    return (60 * minutes * fps)
// }
// console.log(frames(1,1))
// console.log(frames(10,1))
// console.log(frames(10,25))


// 3.  Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
//     To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
// cons    profitableGamble(0.2, 50, 9)
// cons    profitableGamble(0.9, 1, 2)
// cons    profitableGamble(0.9, 3, 2)
//     A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.

// function profitableGamble(prob, prize, pay){  
//     return (prob * prize) > pay;
// }

// console.log(profitableGamble(0.2, 50, 9))
// console.log(profitableGamble(0.9, 1, 2))
// console.log(profitableGamble(0.9, 3, 2))


4. //  ==> Drinks Allowed?
//     A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
//     Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
//     Return true or false.
//     Some countries have a slightly higher drinking age, but for the purposes of this challenge, it will be 18.

// shouldServeDrinks(17, true)
// shouldServeDrinks(19, false)
// shouldServeDrinks(30, true)

// function shouldServeDrinks(age, boolean){
//    return age >= 18 && boolean === false;
// }

// console.log(shouldServeDrinks(17, true));
// console.log(shouldServeDrinks(19, false));
// console.log(shouldServeDrinks(30, true));



//  5.  24 ==> Is the String Empty?
//      Create a function that returns true if a string is empty and false otherwise.
//       A string containing only whitespaces " " does not count as empty.

// isEmpty("")
// isEmpty(" ")
// isEmpty("a")

// function isEmpty(string){
//    return string == "";
// }


// console.log(isEmpty(""));
// console.log(isEmpty(" "));
// console.log(isEmpty("a"));

// function length(name){
//   for (let index = 0; index <= name.length; index++) {
//       console.log(name.length)
//   }
// }

// console.log(length("Hello World")); 
// console.log(length("Edabit")); 
// console.log(length("wash your hands!"));

function split(name) { 
   return name.split('a','e');
}

console.log(split("abcde"));
console.log(split("Hello!"));
console.log(split("What's the time?"));
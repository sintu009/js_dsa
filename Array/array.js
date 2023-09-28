// 1. Write a JavaScript function to calculate the sum of two numbers.

// function sum(a, b) {
//     return a + b
// }

// let sumtotal = sum(5, 6)
// console.log(sumtotal)

// 2. Write a JavaScript program to find the maximum number in an array.

// 1st method
// let arr = [1, 2, 3, 4, 9, 5, 7, 6, 0]
// console.log(Math.max(...arr))

//2nd method
// let arr = [1, 2, 3, 4, 20, 5, 7, 6, 0]
// arr.sort((a, b) => {
//     return a - b;
// })
// arr.reverse()
// console.log(arr[0])


//3. ##Take this array var array = [1, 2, 3, 4, 5] and copy it using

// 1st method
// var array = [1, 2, 3, 4, 5]
// var result = array.slice()
// console.log(array)
// console.log(result)

// 2st method
// var array = [1, 2, 3, 4, 5, 6];
// var array2 = []

// for (i = 0; i < array.length; i++) {
//     array2 = array
// }
// console.log("array2 " + array2)

let nums = [2, 7, 11, 15], target = 9
var twoSum = function (nums, target) {
    return nums + target
};

twoSum()
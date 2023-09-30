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

// let nums = [2, 7, 11, 15], target = 9
// var twoSum = function (nums, target) {
//     return nums + target
// };

// twoSum()


// 4.2 Find the “Kth” max and min element of an array

// let arr = [1, 2, 9, 8, 5,]
// arr.sort((a, b) => {
//     return a - b
// })
// console.log(arr[0])
// arr.reverse()
// console.log(arr[0])

// 4.3 Move all the negative elements to one side of the array

// let arr = [-1, 2, 3, -4, 5, -9]
// arr.sort((a, b) => {
//     return a - b;
// })
// console.log(arr)


// Calculate the sum of elements in an array:

// let arr = [1, 2, 3, 5, 6]
// var sum = 0
// for (i = 0; i <= arr.length - 1; i++) {
//     sum += arr[i]
// }
// console.log(sum)

// Sort first half in ascending order and second half in descending :

// let arr = [5, 4, 9, 7, 3, 1, 2, 7]

// let n = arr.sort()
// for (i = 0; i <= parseInt(n / 2); i++) {
//     console.log(arr[i] + " ")
// }

// for (j = 0; j <= parseInt(n / 2); j--) {
//     console.log(arr[j] + " ")
// }

//  Finding the frequency of elements in an array:

// const letters = [1, 1, 2, 3, 4, 4, 5];
// const count = {}; letters.forEach(e => count[e] ? count[e]++ : count[e] = 1);

// console.log(count)



// -------------------------------------------------



// Find Largest element in an array


let arr = [5, 4, 9, 7, 3, 1, 2, 7]


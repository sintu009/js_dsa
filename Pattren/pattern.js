// let str = " "
// for (row = 1; row <= 5; row++) {
//     for (col = 1; col <= 5 - row; col++) {
//         str = str + " "
//         console.log(str)
//     }
//     for (col = 1; col <= row; col = col + 1) {
//         str = str + col
//         console.log(str)
//     }
//     for (col = row - 1; col > 1; col = col - 1) {
//         str = str + " "
//         console.log(str)

//     }
//     console.log('\n')

// }
// console.log(str)




for (i = 1; i <= 5; i++) {
    let k = i
    for (j = 1; j <= 5; j++) {
        if (j >= 5 && j <= 3 + i) {
            console.log(k)
            j < 4 ? k++ : k--

        }
        else {
            console.log('\n')

        }
    }
}

const a = [0, 1, 2, 3, 4, 5, 6];
const h1Elements = document.querySelectorAll("h1");


a.forEach((number, index) => {
    if (number % 2 === 0) {
        h1Elements[index].style.color = "green";
    } else {
        h1Elements[index].style.color = "orange ";
    }
});










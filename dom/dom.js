
// const a = [0, 1, 2, 3, 4, 5, 6];
// const h1Elements = document.querySelectorAll("h1");

// a.forEach((number, index) => {
//     if (number % 2 === 0) {
//         h1Elements[index].style.color = "green";
//         h1Elements[index].style.background = "orange"

//     } else {
//         h1Elements[index].style.color = "orange ";
//         h1Elements[index].style.background = "green"


//     }
// });



// const addButton = document.getElementById('addButton');
// const taskInput = document.getElementById('taskInput');
// const taskList = document.getElementById('taskList');

// addButton.addEventListener('click', function () {
//     const taskText = taskInput.value;
//     if (taskText) {
//         const taskItem = document.createElement('li');
//         taskItem.textContent = taskText;
//         // taskItem.addEventListener('click', function () {
//         //     taskItem.style.color = 'green';
//         // });

//         taskList.innerHTML += '<li>' + taskText + '</li>';

//         taskInput.value = '';
//     }
// });

let i = 0;

function print() {
    let name = document.getElementById('name');
    let x = name.value;

    if (x.trim() !== '') {
        let taskList = document.getElementById('taskList');
        let listItem = document.createElement('li');
        listItem.style.color = (i % 2 === 0) ? 'red' : 'blue';
        listItem.appendChild(document.createTextNode(x));
        taskList.insertBefore(listItem, taskList.firstChild);
        i++;
        name.value = '';
    } else {
        alert('Please enter a task.');
    }
}








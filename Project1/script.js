let tasks = [];
let text = document.querySelector(".text");

function Add() {
    let inputs = document.getElementById("inputfield");
    let task = inputs.value.trim();

    if (task === "") {
        alert("Please enter the task");
    } else {
        tasks.unshift(task); // Add new task to the beginning of the array

        // Clear previous tasks in the text element
        text.innerHTML = "";

        // Reverse the tasks array and render the tasks
        tasks.forEach(function (task, index) {
            let newEle = document.createElement("ul");
            newEle.innerHTML = `${task} <i class="fa fa-trash" aria-hidden="true"></i>`;

            if ((index + 1) % 2 === 0) {
                newEle.style.backgroundColor = 'red';
            } else {
                newEle.style.backgroundColor = 'green';
            }

            text.appendChild(newEle);

            newEle.querySelector("i").addEventListener("click", function () {
                let index = tasks.indexOf(task);
                tasks.splice(index, 1);
                newEle.remove();
            });
        });

        inputs.value = "";
    }
}

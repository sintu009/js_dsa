let inputs = document.getElementById("inputfield")

let text = document.querySelector(".text")


function Add() {
    if (inputs.value == "") {
        alert("Plz enter the task")
    }
    else {
        let newEle = document.createElement("ul")
        newEle.innerHTML = `${inputs.value} <i class="fa fa-trash" aria-hidden="true"></i>`;
        text.appendChild(newEle)
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click", remove)

        function remove() {
            newEle.remove()
        }
    }

}


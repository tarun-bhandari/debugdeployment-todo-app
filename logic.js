
// fetch all todos
let todos = JSON.parse(localStorage.getItem('todos')) || [];

let textfield = document.getElementById("textfield");
let container = document.getElementById("container");

let addbtn = document.getElementById("addbtn")
addbtn.addEventListener("click", createTodo);

// function will check if there is some todos store in the local storage if there then load them or else show nothing
// this function will load whenever the dom is loaded
document.addEventListener("DOMContentLoaded", function() {
   if (todos.length != 0) {
        todos.forEach((todo, index)=> {
            renderTodosInHTML(todo.text, index); 
        })
    }  
});

// function to add the todos in the localstorage
function addTodosToLocalStorage(todoText) {
    todos.push({text: todoText});
    console.log(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// function to save todo in local storage and render it in web
function createTodo() {
    if(textfield.value.length == 0) {
        console.log("Nothing in the textfield");
        alert("Please input something");
    } else { 
        renderTodosInHTML(textfield.value, todos.length); 
        addTodosToLocalStorage(textfield.value);
        textfield.value = "";
    }
}

// function to display the todos in the web
function renderTodosInHTML(text, index) {
    let make_div = document.createElement("div");
    make_div.classList.add("todo");

    let make_text = document.createElement("h4");
    make_text.textContent = text;

    let make_doneButton = document.createElement("button");
    make_doneButton.textContent = "Done"
    make_doneButton.classList.add("done-btn");
    make_doneButton.addEventListener("click", function() {
        console.log("click on done button");
        container.removeChild(make_div);
        todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
        //localStorage.removeItem(todos[index])
    });

    make_div.appendChild(make_text);
    make_div.appendChild(make_doneButton);
    container.appendChild(make_div);
}







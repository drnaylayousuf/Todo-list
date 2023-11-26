function addtodo() {
    var input = document.getElementById("todo-input").value;

    if (input === "") {
        alert("Please enter a todo item.");
        return;
    }

    var list = document.getElementById("listItems");

    var listElement = document.createElement("li");
    var listText = document.createTextNode(input);
    listElement.appendChild(listText);
    list.appendChild(listElement);

    // Delete button
    var delBtn = document.createElement("button");
    var delBtnText = document.createTextNode("Delete");
    delBtn.appendChild(delBtnText);
    delBtn.setAttribute("onclick", "deleteTodo(this)");
    listElement.appendChild(delBtn);

    // Edit button
    var editBtn = document.createElement("button");
    var editBtnText = document.createTextNode("Edit");
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute("onclick", "editTodo(this)");
    listElement.appendChild(editBtn);

    document.getElementById("todo-input").value = "";
}

function deleteTodo(e) {
    e.parentNode.remove();
}
function editTodo(e) {
    console.log("Edit button clicked");
    var currentText = e.parentNode.firstChild.nodeValue;
    console.log("Current text:", currentText);
    var updatedText = prompt("Enter updated value", currentText);

    if (updatedText !== null && updatedText !== "") {
        e.parentNode.firstChild.nodeValue = updatedText;
    }
}


function deleteAllTodos() {
    var list = document.getElementById("listItems");

    // Remove all child elements (todo items) from the list
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

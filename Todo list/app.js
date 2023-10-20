function addtodo()  {
    var input = document.getElementById("todo-input");
    // console.log(input.value);

var list = document.getElementById("listItems");

var listElement = document.createElement("li");

var listText = document.createTextNode(input.value);

listElement.appendChild(listText);

list.appendChild(listElement);

// ******************Del button**********************

var delbtn = document.createElement("button");

// which value  wiil be in this button  we give it by create text node ill give


var delbtnText = document.createTextNode("Delete") ;

delbtn.appendChild(delbtnText);

delbtn.setAttribute("onclick","deltodo(this)")

listElement.appendChild(delbtn );


}





// ******************Edit button**********************

var Editbtn = document.createElement("button");

// which value  wiil be in this button  we give it by create text node ill give


var EditbtnText = document.createTextNode("Edit") ;

Editbtn.appendChild(EditbtnText );

listElement.appendChild(Editbtn);

Editbtn.setAttribute("onclick","editTodo(this)")

list.appendChild(listElement);





console.log(listElement);

input.value = "" ;


}

function deletetodo() {

    var list = document.getElementById("listItems");

    // list.innerHTML  = "";

    list.remove();
}


// function making for delete one  anything 
//  parameter through any value pass this in any argument and reseve in any variable by this 


function deltodo(e) {

console.log(e.parentNode.remove());


}

function editTodo(e){

    var currentli = e.parentNode.firstChild.nodeValue;

    var inputfield = prompt("enter updated value",currentli);

    e.parentNode.firstChild.nodeValue = inputfield;
}

let todoBox = document.getElementById("todo");
todoBox.style.height = "30px";

let todoText = todoBox.value;

let list = document.querySelector("ul");



let formElement = document.querySelector("form");

let plus = document.querySelector("#btn-plus");
let minus; 

formElement.addEventListener("submit", function(event){
  event.preventDefault();

  localStorage.setItem("todoItem", todoBox.value);

//   [{},{}]
//   {id:'', name:'', done:true/false}

  let container = document.createElement("div");
  container.id = "todo-container";
  list.append(container);

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  container.appendChild(checkbox);
  
  let label = document.createElement("label");
  label.setAttribute("for", "checkbox")
  
  label.innerText = todoBox.value;
  container.appendChild(label);

  minus = document.createElement("button");
  minus.id = "btn-minus";
  minus.innerHTML = "&#8722";
  container.appendChild(minus);

  todoBox.value = "";
  
  let br = document.createElement("br");
  list.appendChild(br);
  
  checkbox.addEventListener("change", function(){
        label.classList.toggle("done");
        
    })

    minus.addEventListener("click", function(){
        list.removeChild(container);
    })

    

})





//<label for="todo-remove"><button id="btn-minus"><span id="minus">&#8722;</span></button></label><br><br>
let todoBox = document.getElementById("todo");
todoBox.style.height = "30px";

let todoText = todoBox.value;

let list = document.querySelector("ul");



let formElement = document.querySelector("form");

let plus = document.querySelector("#btn-plus");
let minus;

render();

formElement.addEventListener("submit", function(event){
  event.preventDefault();

  //localStorage.setItem("todoItems", );

  // how to update items in storage
  // 1. read current items from storage
  // 2. modify them accordingly
  // 3. update items in storage

  // 1.

  let items = localStorage.getItem("todoItems");

  items = JSON.parse(items);

  if(!items){
    items = [];
  };
  //2.
  let todoBox = document.getElementById("todo");
  
  let item = {
    
    text: todoBox.value,
    checkbox: false
  };

    items.push(item);

    localStorage.setItem("todoItems", JSON.stringify(items));

  render();
    })

    

function render(){
  let items = localStorage.getItem("todoItems");

  items = JSON.parse(items);

  if(!items){
    items = [];
  };

  list.innerHTML = "";

  for( let i =0; i<items.length; i++){

    let container = document.createElement("div");
  container.id = "todo-container";
  list.append(container);

  let checkbox = document.createElement("input");

  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = items[i].checkbox;
  checkbox.id = i;
  
  container.appendChild(checkbox);
  
  let label = document.createElement("label");
  label.setAttribute("for", "checkbox");
  
  label.innerText = items[i].text;
  if(items[i].checkbox){
    label.classList.add("done");
  }
  

  container.appendChild(label);

  minus = document.createElement("button");
  minus.id = "btn-minus";
  minus.innerHTML = "&#8722";
  minus.id = i;
  container.appendChild(minus);


  todoBox.value = "";
  
  let br = document.createElement("br");
  list.appendChild(br);
  
  checkbox.addEventListener("change", function(e){
        //label.classList.toggle("done");
        let items = localStorage.getItem("todoItems");

      items = JSON.parse(items);

      if(!items){
        items = [];
      };
      

      // find index of item to delete in items
      //e.target.id
      // if exists, use index to splice array
      // save changes to localstorage

      items[e.target.id].checkbox = e.target.checked;
      
        //list.removeChild(container);
      
        localStorage.setItem("todoItems", JSON.stringify(items));
        
        render();
    })

    minus.addEventListener("click", function(e){

      let items = localStorage.getItem("todoItems");

      items = JSON.parse(items);

      if(!items){
        items = [];
      };

      // find index of item to delete in items
      //e.target.id
      // if exists, use index to splice array
      // save changes to localstorage

      items.splice(e.target.id, 1);
        //list.removeChild(container);
      
        localStorage.setItem("todoItems", JSON.stringify(items));
        
        render();
      
      })

      // change data
      // render
  }
}



//<label for="todo-remove"><button id="btn-minus"><span id="minus">&#8722;</span></button></label><br><br>
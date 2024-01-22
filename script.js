const input_box = document.getElementById("input-box");
const list_container = document.getElementById("list-container");

function addTask() {
  if (input_box.value === " ") {
    alert("You must write something");
  } else {
    let li = document.createElement("li"); //creating element of li tag
    li.innerHTML = input_box.value; //adding value to li tag
    list_container.appendChild(li); //appending the li tag to list_conotainer tag
    //now adding the * button in the task
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input_box.value = "";
  saveData();
}

list_container.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
    localStorage.setItem("data", list_container.innerHTML);
}

function showTask(){
    list_container.innerHTML=localStorage.getItem("data");
}
showTask();
const list = document.querySelector("ul");
const inputbox = document.getElementById("item");
const inputbutton = document.querySelector("button");
inputbutton.addEventListener("click", function1);
function function1(){
  const currentvalue = inputbox.value;
  inputbox.value = "";
  const newlist = document.createElement("li");
  const newinputbox = document.createElement("span");
  const deletebutton = document.createElement("button");
  newlist.appendChild(newinputbox);
  newlist.appendChild(deletebutton)
  const spantext = document.createTextNode(currentvalue);
  newinputbox.appendChild(spantext);
  deletebutton.textContent = "Delete";
  list.appendChild(newlist);
  function function2(){
    newlist.remove();
  }
    deletebutton.addEventListener("click", function2);
}

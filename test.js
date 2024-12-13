//selecting list element
const list=document.getElementById("toDoList");
const cont=document.getElementById("container");
const value=document.getElementById("input");
const button=document.getElementById("button");
const elements=document.createElement("li");
//adding events
const addEvent=button.addEventListener('click',function(){
    elements.textContent=value.value;
    list.appendChild(elements)
});
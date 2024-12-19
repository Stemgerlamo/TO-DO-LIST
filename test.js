//selecting list element
const list=document.getElementById("toDoList");
const value=document.getElementById("input");

//adding events
function add(){
    if(value.value==="")
    {
        alert("Please Enter task");
    }
    else{
        const elements=document.createElement("li");
        elements.innerHTML=value.value;
        list.appendChild(elements) 
        const span=document.createElement("span");
        span.innerHTML="<button >remove</button>";
        span.setAttribute("style","size:100px;margin-left:20px");
        elements.appendChild(span);
        span.addEventListener('click',function(){
                span.parentNode.remove();
        });
        list.addEventListener('click',function(event)
        {
            if(event.target.tagName==="LI"){
                if(event.target.style.textDecoration==="line-through")
                {
                    event.target.setAttribute("sytle","text-decoration:none; color:black;");
                }
                else{
                    event.target.setAttribute("style","text-decoration:line-through;");
                }
                
            }
            
        })
    }
   value.value=""; 
   
}

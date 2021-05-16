let btn = document.querySelector(".btn");
let inputBox = document.querySelector(".inputBox");
let listItems = document.querySelector(".listItems");

btn.addEventListener("click" , ()=>{
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    listItems.appendChild(li);
    inputBox.value = "";
    li.title = "click to Underline the text"
    li.addEventListener("click" , ()=>{
        li.classList.add("new_style");
        li.title = "double click to remove the text";
    });
    li.addEventListener("dblclick" , ()=>{
       listItems.removeChild(li)
    })
})
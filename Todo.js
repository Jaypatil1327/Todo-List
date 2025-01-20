let input = document.querySelector("input");
let btn = document.querySelector("button");
let tsks = document.querySelector("ul");

    btn.addEventListener("click", function (event) {
        event.preventDefault() ; 
        if (input.value === "") {
            alert("You need to add something");
        } else {
    
            let newEle = document.createElement("li");
    
            newEle.innerHTML = input.value ; 
    
            // Create trash icon
            let trashIcon = document.createElement("i");
            trashIcon.className = "fa-solid fa-trash-can";
    
            // Add trash icon to the task
            newEle.appendChild(trashIcon);
    
            // Add event listener to trash icon
            trashIcon.addEventListener("click", function () {
                newEle.remove();
            });
    
            // Add event listener to toggle "checked" class
            newEle.addEventListener("click", function () {
                newEle.classList.toggle("checked");
            });
    
            // Append the new task to the list
            tsks.appendChild(newEle);
    
            // Clear the input field
            input.value = "";
        }
    });




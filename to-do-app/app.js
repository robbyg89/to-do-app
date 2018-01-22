function onReady(){
    const addtoDoForm = document.getElementById('addtoDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');
    
    addtoDoForm.addEventListener('submit', event => {
        event.preventDefault();
        
        // get the text
        let title = newToDoText.value;
        
        // create new li
        let newLi = document.createElement('li');
        
        // create a new input
        let checkbox = document.createElement('input');
        
        //set the input's type to checkbox
        checkbox.type = "checkbox";
        
        // set the title
        newLi.textContent = title;
        
        //attach the checkbox to the li
        newLi.appendChild(checkbox);
        
        //attach the li to the ul
        toDoList.appendChild(newLi);
        
        //empty the input
        newToDoText.value = '';
    });
}


function onReady(){
    const addToDoForm = document.getElementById('addTodoForm');
    const newToDoText = document.getElementById('newTodoText');
    const toDoList = document.getElementById('todoList');
    console.log(addToDoForm);
    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        
        // get the text
        let title = newToDoText.value;
        
        // create new li
        let newLi = document.createElement('li');
        
        // create a new input
        let checkbox = document.createElement('input');
        
        // set the input's type to checkbox
        checkbox.type = "checkbox";
        
        // set the title
        newLi.textContent = title;
        
        // attach the checkbox to the li
        newLi.appendChild(checkbox);
        
        // attach the li to the ul
        toDoList.appendChild(newLi);
        
        // empty the input
        newToDoText.value = '';
        
        // delete To-Do
        
    });
}


window.onload = function(){
    onReady();
};


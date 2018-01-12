function onReady(){
     const addToDoForm = document.getElementById('addToDoForm');
     const newToDoText = document.getElementById('newToDoText');
     const toDoList = document.getElementById('toDoList');
     addToDoForm.addEventListener('submit', () => {
        event.preventDefault();
        //get the text
        let title = newToDoText.value;
       
        //create a new li 
        let newLi = document.createElement('li');
       
        //create a new input
        let checkbox = document.createElement('input');
       
        //set the inputs type to checkbox
        checkbox.type = "checkbox";
       
        //set the title
        newLi.textContent = title;
       
        //attatch the checkbox to the Li
        newLi.appendChild(checkbox);
       
        //attatch the li to the ul
        toDoList.appendChild(newLi);
       
        //empty the input
        newToDoText.value = '';
     });
         
    }

window.onload = function() {
    onReady();
};
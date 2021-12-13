const listDiv = document.querySelector('.list');
const listUl = document.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const saveButton = document.querySelector('.saveButton');
const listItem = document.getElementsByTagName('li');
const hideLiElements = document.querySelectorAll('.hide');




// add item
addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    if (addItemInput.value != "") {
        li.innerHTML = `
            <span class="liDiv notchecked">${addItemInput.value}</span> 
            <button class="delete">Delete</button> 
            <button class="up">&and;</button>
            <button class="down">&or;</button>
        `;
        ul.appendChild(li);
        addItemInput.value = '';
    } else {
        alert("Please fill the input if you want to add something to list!");
    };
    
})

// save button 

saveButton.addEventListener('click', () => {

});




// up & down & delete buttons
listUl.addEventListener('click', (event) => {
    if(event.target.tagName == 'BUTTON') {  // target the buttons 
        if(event.target.className == 'delete') {  // target the button with delete class
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
        if(event.target.className == 'up') {
            let li = event.target.parentNode;
            let ul = li.parentNode;
            let prev = li.previousElementSibling;
            if(prev) {
                ul.insertBefore(li, prev);
            }
        }
        if(event.target.className == 'down') {
            let li = event.target.parentNode;
            let ul = li.parentNode;
            let next = li.nextElementSibling;
            if(next) {
                ul.insertBefore(next, li);
            }
        }
    }
    if(event.target.tagName == 'SPAN') {
        if(event.target.classList.contains('checked')) {
            event.target.classList.replace('checked', 'notchecked');
        } 
        else {
            event.target.classList.replace('notchecked', 'checked');
        } 
    }
})




const toDoArray = [
    'Get Groceries',
    'Call Mum',
    'Get Dentist Appointment',
    'Pay Electricity Bill',
    'Meet with Ed',
    'Clear Email',
    'Visit Uncle', 
    'Go To Paris',
    'Get a Haircut',
]

let randomNumArray = [];


const listDiv = document.querySelector('.list');
const listUl = document.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const saveButton = document.querySelector('.saveButton');
const listItem = document.getElementsByTagName('li');
const hideLiElements = document.querySelectorAll('.hide');



// function to hide .hide class LI

function hide() {
    for(let i = 0; i < hideLiElements.length; i++){
        hideLiElements[i].style.display = 'none';
    }
}

// function add Li to Ul

function addElement(value, addClass) {
    

    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    if (addClass !== null) {
        return li.classList.add(addClass);
    }
    li.innerHTML = `
        <span class="liDiv notchecked">${value}</span> 
        <button class="delete">Delete</button> 
        <button class="up">&and;</button>
        <button class="down">&or;</button>
        `;
    ul.appendChild(li);
}

// function to check LocalStorage

function checkLocalS() {
    if(localStorage.length == 0) {
        return false;
    } 
    else {
        Object.keys(localStorage).forEach((key) => {
            console.log(localStorage.getItem(key));
        });
    }
}


// random number generator 

function randomNumb() {
    return Math.floor(Math.random() * toDoArray.length);
}


// choose random numbers 

function randomToDo(number) {
    console.log(number);
    if(randomNumArray.includes(number)) {
        randomToDo(randomNumb());
    } else {
        randomNumArray.push(number);
    }
}


// add item
addItemButton.addEventListener('click', () => {

    let = inputValue = addItemInput.value;

    
    if(hideLiElements[0].style.display != 'none' || !hideLiElements[0]) {
        hide();
    }

    if (inputValue != "") {
        
        addElement(inputValue, null);
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


// page load function

window.onload = () => {
    if(localStorage.length == 0) {
        console.log('nincs semmi benne')
    } else {
        console.log('van benne');
    }
}

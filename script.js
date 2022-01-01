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



// function to hide .hide class LI

function hide() {
    const hideLiElements = document.querySelectorAll('.hide');
    for(let i = 0; i < hideLiElements.length; i++){
        hideLiElements[i].style.display = 'none';
    }
}

// function add Li to Ul

function addElement(value, addClass) {
    
    let li = document.createElement('li');
    if (addClass != null) {
        li.classList.add(addClass);
    }
    li.innerHTML = `
        <span class="liDiv notchecked">${value}</span> 
        <button class="delete">Delete</button> 
        <button class="up">&and;</button>
        <button class="down">&or;</button>
        `;
    listUl.appendChild(li);
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


// random quote add to array

function randomArrayFiller() {
    
    for(let i = 0; randomNumArray.length < 4; i++){
        let number = randomNumb();
        if(!randomNumArray.includes(number)) {
            randomNumArray.push(number);
        }
    };
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
    const hideLiElements = document.querySelectorAll('.hide');
    let = inputValue = addItemInput.value;

    
    if(!hideLiElements[0] || hideLiElements[0].style.display != 'none') {
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
    const li = document.querySelectorAll('li');
    let liDiv = document.querySelectorAll('.liDiv');

    //if there is no Li element at all we clear the localStorage
    if(li.length == 0){
        window.localStorage.clear();
    }
    else {
        for(let i = 0; i < li.length; i++){
            window.localStorage.setItem(i, liDiv[i].innerHTML);
            console.log(window.localStorage.setItem(i, liDiv[i].innerHTML))
        }
    }

    

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
    randomArrayFiller();
    if(localStorage.length == 0) {
        for(const e of randomNumArray) {
            addElement(toDoArray[e], 'hide');
        }
    } else {
        for(let i = 1; i <= localStorage.length; i++){
            addElement(localStorage.getItem(i), null);
        };
    }
}

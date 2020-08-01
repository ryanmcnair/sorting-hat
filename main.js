'use strict';
// INITIAL BUTTON CLICK FROM THE JUMBOTRON DIV
const letsStartSorting = () => {
    document.getElementById('sortingHatButton').addEventListener('click', sortingForm)
}
// REUSEABLE FUNCTION ADDING ELEMENTS TO THE DOM
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
  };
// FIRST FORM REQUESTING THE USERS NAME
const sortingForm = () => {
    let domString = `<form>
                        <h2>Enter First Year's Name:</h2>
                        <div class="form-inline">
                            <div class="col-auto">
                                <label class="sr-only" for="inlineFormInput">Name</label>
                                <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Your name..." required>
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-dark mb-2" id="sort-button">Sort!</button>
                            </div>
                        </div>
                    </form>`
    printToDom('#nameForm', domString);
    buttonEvents();
}
// THIS FUNCTION IS CALLING THE CARD FUNCTION AND ADDING THE NAME TO THE FORM
const buttonEvents = () => {
    document.getElementById('sort-button').addEventListener('click', houseCards);
    document.getElementById('sort-button').addEventListener('click', studentNameFromForm);
}

// console.log(buttonEvents('clicked'))
// THIS IS AN EMPTY ARRAY THAT HOLDS THE NAME FROM THE FORM AND THE RANDOM HOUSE
let studentNameToInput = [];

// THIS FUNCTION TAKES THE NAME FROM THE FORM AND PUSHES IT TO THE ARRAY ABOVE
const studentNameFromForm = () => {
    const name = document.getElementById('inlineFormInput').value
    studentNameToInput.push({name: name, house: [houseRandomizer()]});
    return studentNameToInput.push(name);
}
// THIS FUNCTION CREATES A RANDOM HOUSE AND PUSHES IT TO THE ARRAY ABOVE
const houseRandomizer = () =>{
    const houseArray = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
    let randomHouse = houseArray[Math.floor(Math.random() * houseArray.length)];
    return randomHouse;
}
// THIS FUNCTION CREATES THE CARD, ADDS THE USER NAME AND RANDOM HOUSE
const houseCards = () => {
    let domString = ''
    for (let i = 0; i < studentNameToInput.length; i++){
    if (studentNameToInput[i].name && studentNameToInput[i].house){
    domString = `<div class="card" style="width: 18rem;">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbrIZxxcn-Ga2rxsPPV1BAIQnc2vy_M6P3FQ&usqp=CAU" class="card-img-top" alt="Hogwarts logo">
                    <div class="card-body">
                    <h5 class="card-title">${studentNameToInput[i].name}</h5>
                    <h3>${studentNameToInput[i].house}</h3>
                    <p class="card-text">You will be good, not evil. And become the greatest wizard or witch of all time!</p>
                    <a href="#" class="btn btn-dark btn-lg">Expel</a>
                    </div>
                    </div>`
    }
    }
    printToDom('#cardSection', domString);
}
const init =()=>{
    letsStartSorting();
}
init();
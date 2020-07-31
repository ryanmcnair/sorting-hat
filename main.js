const letsStartSorting = () => {
    document.getElementById('sortingHatButton').addEventListener('click', sortingForm)
}
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };
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
    printToDom('nameForm', domString);
    buttonEvents();
    document.getElementById('sort-button').addEventListener('click', sortingForm)
}
const buttonEvents = () => {
    document.getElementById('sort-button').addEventListener('click', houseCards);
}
studentNameToInput = [];
const studentNameFromForm = () => {
    const name = document.getElementById('inlineFormInput').value;
    studentNameToInput.push({name: name, house: randomHouseReturn()});
}
const randomizer = () =>{
    const houseArray = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
    let randomHouse = houseArray[Math.floor(Math.random() * houseArray.length)];
    return randomHouse;
}
const randomHouseReturn = randomizer();
const houseCards = () => {
    let domString = ''
    domString = `<div class="card" style="width: 18rem;">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbrIZxxcn-Ga2rxsPPV1BAIQnc2vy_M6P3FQ&usqp=CAU" class="card-img-top" alt="Hogwarts logo">
                    <div class="card-body">
                    <h5 class="card-title">${randomHouseReturn}</h5>
                    <h3 id="studentsNameCard>${studentNameToInput}</h3>
                    <p class="card-text">You will be good, not evil. And become the greatest wizard or witch of all time!</p>
                    <a href="#" class="btn btn-dark btn-lg">Expel</a>
                    </div>
                    </div>`
    printToDom('cardSection', domString);
}
const init =()=>{
    letsStartSorting();
}
init();
const houseArray = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

let students = [];

let randomHouse = houseArray[Math.floor(Math.random() * houseArray.length)];



const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

const sortingForm = (e) => {
    const buttonId = e.target.id;
    let domString = ''
    domString += ` <form class="form-inline">
                    <h2>Enter First Year's Name</h2>
                    <div class="form-group mx-sm-3 mb-2">
                    <label for="studentName" class="sr-only"></label>
                    <input type="text" class="form-control" id="studentName" placeholder="Neville Longbottom">
                    </div>
                    <div id="sortButton">
                    <button type="submit" class="btn btn-primary mb-2" id="sortingButton">Sort!</button>
                    </div>
                    </form>`;
            printToDom("sortingForm", domString);
    }


const houseCards = (e) => {

    let domString = ''
    let input = document.querySelector('#studentName').value;
    domString = `<div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${randomHouse}</h5>
                    <h3 id="studentsNameCard>${input}</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>`
    printToDom('cardSection', domString)
}

const buttonEvents = () => {
    document.getElementById('sortingHatButton').addEventListener("click", sortingForm);
    document.getElementById('sortingButton').addEventListener("click", houseCards());
}

const init =()=>{
    buttonEvents();
}
init();
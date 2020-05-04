document.getElementById("tryButton")
        .addEventListener("click", function() {
  document.getElementById("hello").hidden = true;
  document.getElementById("sort").hidden = false;
}, false);

let studentArray = [];

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
// select a random house from houses ^ 

const chosenHouse = () => {
  const house = Math.floor((Math.random() * 4));
 return houses[house];
};

const addStudents = () => {
  const studentName = document.getElementById("studentName").value;
    studentArray.unshift({name: studentName, 
    house: chosenHouse(),
  // id: studentId.toString(10)
  });
  console.log(studentArray)
  buildSortedCard(studentArray)
};


const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildSortedCard = (studentCollection) => {
  domString = '';
  for (let i = 0; i < studentCollection.length; i++) { 
  

  domString += `
    <div class="card" id="${studentCollection[i].house}">
    <div class="mt-3 card-header">
      ${studentCollection[i].house}
    </div>
    <div class="card-body">
      <h4 class="card-title">${studentCollection[i].name}</h4>
      <a href="#" class="btn btn-warning" id="expelButton">Expel</a>
    </div>
    </div>
  `
  };
  printToDom('#sortedContainer', domString);
};

  const clickEvents = () => {
    document.getElementById('sortButton').addEventListener('click', addStudents);
  };

  const init = () => {
    clickEvents();
    buildSortedCard(studentArray);
  }
  
  init();

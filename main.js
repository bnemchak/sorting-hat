document.getElementById("tryButton")
        .addEventListener("click", function() {
  document.getElementById("hello").hidden = true;
  document.getElementById("sort").hidden = false;
}, false);

let studentArray = [];

let studentIdNumber = 0;

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
    id: studentIdNumber
  });
  studentIdNumber++
  console.log(studentArray)
  buildSortedCard(studentArray)
  const expelBtns = document.getElementsByClassName('expel');
    for (let i = 0; i < expelBtns.length; i++) {  
    expelBtns[i].addEventListener('click', expelStudent);
    };
};

const nameEntered = () => {
  if (document.getElementById("studentName").value === '') {
    alert("Enter Name");
    } else {
    addStudents();
    document.getElementById("studentName").value = '';
    };
  };

  const expelStudent = (e) => {
    const buttonId = e.target.id;
    let studentIndex = 0;
    
    for ( let i = 0; i < studentArray.length; i++ ) {
        if ( studentArray[i].studentId === buttonId ) {
    
            studentIndex += i;
        }
      }
        studentArray.splice( studentIndex, 1);
        console.log('expel function', studentArray);
        buildSortedCard(studentArray);
  }

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
      <button class="btn btn-warning expel" id="${studentCollection[i].id}">Expel</button>
    </div>
    </div>
  `
  };
  printToDom('#sortedContainer', domString);
};

  const clickEvents = () => {
    document.getElementById('sortButton').addEventListener('click', nameEntered);
  };

  const init = () => {
    clickEvents();
    buildSortedCard(studentArray);
  }
  
  init();

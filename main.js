console.log('hp')

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
};











const buildSortedCard = (studentName, houseName) => {

  let card = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${studentName}</h5>
    <p class="card-text">${houseName}</p>
    <a href="#" class="btn btn-warning">Expel</a>
  </div>
  </div>
</div>`
  }

  const clickEvents = () => {
    document.getElementById('sortButton').addEventListener('click', addStudents);
  };

  const init = () => {
    clickEvents();
  }
  
  init();

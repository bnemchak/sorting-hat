## Description
Sorting Hat is an example project using bootstrap forms, building arrays, print to DOM functions, and click events. 

### Feature List
* Use input from form to build objects
* Print to Dom the array as each object is built and assigned a random ID
* Delete single cards from array on a button click


## Screenshots
![Main View](./images/sorting-hat.png)

## How To Run
1. Clone down this repo
1. Use your favorite http server (like [http-server](https://www.npmjs.com/package/http-server)) to serve it up (`hs`)
1. In your browser, go where it's being served (default is localhost:8080)

## Contributors
* [Brooke Nemchak](https://github.com/bnemchak)

## TODO/Feature Request
- [ ] list expelled students as Voldemort's Army
- [ ] alter appearance of VA to stand out from other students

code block example:
```js
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
```

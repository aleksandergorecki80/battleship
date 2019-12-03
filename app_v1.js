// Creating a grid and adding id to each field
function gridPrint(id) {
  const game = document.getElementById("game");
  var div = document.createElement("DIV");
  game.appendChild(div);
  div.classList.add("field");
  div.id = id;
}

for (let i = 0; i < 7; i++) {
  gridPrint(i);
}

// Setting up a first field of a ship
const shipStart = Math.floor(Math.random() * 5);
let ship = [shipStart];

//bilding a ship
function buildingShip(shipStart) {
  for (let i = 1; i < 3; i++) {
    ship.push(shipStart + i);
  }

  ship.forEach(id => {
    document.getElementById(id).classList.add("ship");
  });
}
buildingShip(shipStart);

const game = document.getElementsByClassName("field");
const gameArray = Array.from(game);

// gameArray.forEach(field => {
//   field.addEventListener("click", () => {
//      removeHitted(field.id);
//      console.log(ship);
//   });
// });

function removeHitted(id){
    console.log(id);
    console.log(ship);
    document.getElementById(id).classList.add("burn");
    return ship.filter((number) => number !== id);
}

gameArray.forEach(field => {
    field.addEventListener("click", () => {
        removeHitted(field.id);
       console.log(field);
       console.log(field.id);
       
    });
  });


// ship = removeHitted(2);










// let tab = [1,2,3];
// function removeNumber(id){
//     return tab.filter(number => number !== id);
// }

// tab = removeNumber(2);
// console.log(tab);


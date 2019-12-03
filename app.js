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


class Ship{
    constructor(startShip){
        this.ship = [startShip];
    }
    buildingShip(){
              for (let i = 1; i < 3; i++) {
              this.ship.push(shipStart + i);
            
        }
    }
    hitTheSheep(){
        this.ship.push('kki');
    }
}

const ship = new Ship(shipStart);
ship.buildingShip(shipStart);
console.log(ship);

const game = document.getElementsByClassName("field");
const gameArray = Array.from(game);

console.log(gameArray);
let proba = 2;

document.getElementById('1').addEventListener('click', ()=>{
    ship.hitTheSheep();
    console.log(ship.ship);
});
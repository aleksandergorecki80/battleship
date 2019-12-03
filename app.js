
class Ship {
  constructor(startShip) {
    this.ship = [startShip];
    this.poprawto = [0,1,2,3,4,5,6];
  }
  buildingShip() {
    for (let i = 1; i < 3; i++) {
      this.ship.push(shipStart + i);
    //   this.markTheShip();
    }
  }
  hitTheSheep(number) {
    // const intNr = parseInt(number);
    this.ship = this.ship.filter(players => players !== number);
    this.burnTheShip(number);
  }
  markTheShip() {
    this.ship.forEach(id => {
      document.getElementById(id).classList.add("ship");
    });
  }
  burnTheShip(id){
    document.getElementById(id).classList.add("burn");
    if(this.ship.length === 0 ){
        alert('Koniec');
        
        this.reset();
    }
  }
  reset(){
    this.poprawto.forEach(id => {
        document.getElementById(id).classList.remove("burn");
      });
      this.buildingShip();
  }
  checkIfHit(id){
    const intNr = parseInt(id);
      if(this.ship.includes(intNr)){
          this.hitTheSheep(intNr)
      } else {
        alert('Pudlo');
      }

  }
}


// Printing the grid
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
  

const ship = new Ship(shipStart);
ship.buildingShip(shipStart);

const game = document.getElementsByClassName("field");
const gameArray = Array.from(game);

for (let i = 0; i < gameArray.length; i++) {
  const shotField = document.getElementById(i);
  shotField.addEventListener("click", () => {
    ship.checkIfHit(shotField.id);
    console.log(ship.ship);
  });
}

class Ship {
  constructor() {
    this.ship = [];
    this.shipAtTheBegining = [];
  }
  buildingShip() {
    // Setting up a first field of a ship
    const shipStart = Math.floor(Math.random() * 5);
    for (let i = 0; i < 3; i++) {
      this.ship.push(shipStart + i);
      this.shipAtTheBegining.push(shipStart + i);
      // this.markTheShip();
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
  burnTheShip(id) {
    document.getElementById(id).classList.add("burn");
    if (this.ship.length === 0) {
      alert("Koniec");

      this.reset();
    }
  }
  reset() {
    this.shipAtTheBegining.forEach(id => {
      document.getElementById(id).classList.remove("burn");
    });
    this.ship = [];
    this.shipAtTheBegining = [];
    this.buildingShip();
  }
  checkIfHit(id) {
    const intNr = parseInt(id);
    if (this.shipAtTheBegining.includes(intNr) && !this.ship.includes(intNr)) {
      alert("You've already hit here!");
      console.log(this.shipAtTheBegining);
    } else {
      if (this.ship.includes(intNr)) {
        this.hitTheSheep(intNr);
      } else {
        alert("Pudlo");
      }
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




const ship = new Ship();
ship.buildingShip();

const game = document.getElementsByClassName("field");
const gameArray = Array.from(game);

for (let i = 0; i < gameArray.length; i++) {
  const shotField = document.getElementById(i);
  shotField.addEventListener("click", () => {
    ship.checkIfHit(shotField.id);
  });
}

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

class Ship {
  constructor(startShip) {
    this.ship = [startShip];
  }
  buildingShip() {
    for (let i = 1; i < 3; i++) {
      this.ship.push(shipStart + i);
      this.markTheShip();
    }
  }
  hitTheSheep(number) {
    const intNr = parseInt(number);
    this.ship = this.ship.filter(players => players !== intNr);
    this.burnTheShip(intNr);
  }
  markTheShip() {
    this.ship.forEach(id => {
      document.getElementById(id).classList.add("ship");
    });
  }
  burnTheShip(id){
    document.getElementById(id).classList.add("burn");
  }
}

const ship = new Ship(shipStart);
ship.buildingShip(shipStart);

const game = document.getElementsByClassName("field");
const gameArray = Array.from(game);

for (let i = 0; i < gameArray.length; i++) {
  const shotField = document.getElementById(i);
  shotField.addEventListener("click", () => {
    ship.hitTheSheep(shotField.id);
    console.log(ship.ship);
  });
}

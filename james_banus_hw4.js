// Create a class that represents anything you like

class Football {
  constructor(league) {
    this._league = league;
  }
  league() {
    return this._league;
  }

  #msg = "League X";
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `${x}`;
  }
}

const _football = new Football("Premier League");

console.log(_football.league());

// Create a class that extends the first class

class footballGames extends Football {
  constructor(league, gamesPlayed) {
    super(league);
    this.gamesPlayed = gamesPlayed;
  }
  gamesAvailable() {
    if (this._league === "Bundesliga") {
      return 34 - this.gamesPlayed;
    } else {
      return 38 - this.gamesPlayed;
    }
  }
  #msg = "Games";
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `${x} Games Remaning`;
  }
}

const _footballGames = new footballGames("Bundesliga", 30);

console.log(_footballGames.gamesAvailable());

// Create a class that extends the second class
// Make sure each class has at least one method and one piece of data unique to it

class footballPoints extends footballGames {
  constructor(league, gamesPlayed) {
    super(league, gamesPlayed);
  }
  pointsAvailable() {
    return _footballGames.gamesAvailable() * 3;
  }
  #msg = "Points";
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `${x} Points Available`;
  }
}

// Create an instance of the final class

const _footballPoints = new footballPoints("Premier League", 30);

console.log(
  _football.league(),
  "Remaining Games:",
  _footballGames.gamesAvailable(),
  "Points Available:",
  _footballPoints.pointsAvailable()
);

// Modify the classes above to use get/set

_football.msg = _football.league();
_footballGames.msg = _footballGames.gamesAvailable();
_footballPoints.msg = _footballPoints.pointsAvailable();

console.log(_football.msg, _footballGames.msg, _footballPoints.msg);

// Create a function in a second file, use export to export it

// In your main file import and execute the function

import { myfunction } from "./function_export.js";
console.log(myfunction(2, 4));

// Write out a fat arrow function using the same line to return (as in no return keyword)
const fatArrow = (a, b) => a + b;

console.log(fatArrow(2, 4));

// Add default parameters to the above function

const fatArrow2 = (a = 2, b = 2) => a + b;

console.log(fatArrow2());

// Create an object that has a child object, that itself has a child object (3 levels).

const obj = {
  club: "Arsenal",
  position1: "FWD",
  FWD: ["Jesus", "Saka", "Martinelli"],
  position2: "MID",
  position4: {
    GK: {
      GK1: "Aaron Ramsdale",
      GK2: "Matt Turner",
    },
  },
};

// Use object destructuring to pull out the parts at level 3

const { GK1, GK2 } = obj.position4.GK;

console.log(GK1);

// Add a default value to the above destructuring

const { position3 = "DEF" } = obj;

console.log(position3);

// Destructure an array

const [fwd1, fwd2, fwd3] = obj.FWD;

console.log(fwd2);

// Create two objects. Add more than two keys/values to both objects. Copy all the items from the first object into the second object.
// Use the spread operator.

const Jesus = {
  Games: "18",
  Goals: "8",
  Assists: "5",
};

const Saka = {
  Games2: "30",
  Goals2: "12",
  Assists2: "10",
  ...Jesus,
};

console.log(Saka);

// Send 5 arguments to a function and use the rest operator to group them

const mid = (...midfielders) => {
  console.log(midfielders);
};

mid("Xhaka", "Partey", "Odegaard", "Jorginho", "Vieira");

// Add a function to one of the objects, use the object method shorthand

const Trossard = {
  Games: "12",
  Goals: 1,
  Assists: 7,
  Total() {
    return this.Goals + this.Assists;
  },
};

console.log(Trossard.Total());

class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(`${this.name} is playing.`);
  }
}

const player1 = new Player("John", 25, "USA");
player1.play(); // Output: John is playing.

player1.age = 26; // Updating the age
console.log(`${player1.name} is now ${player1.age} years old.`); // Output: John is now 26 years old.

const players: Player[] = [];

players.push(player1);

console.log(players); // Output: [ Player { name: 'John', age: 26, country: 'USA' } ]

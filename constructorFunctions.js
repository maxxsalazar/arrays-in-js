//// Constructor Functions

//// Conctructor best practice suggests you name the function with a capital letter
//// this doesn't really make a difference but it helps you differentiate from regular functions

// function Todo(name, completed) {
//   this.name = name;
//   this.completed = completed;
// }
//// Prototypes: every object contains an internal property called prototype;
//// A prototype is a simpler reference to another object that contains common properties
//// and attributes shared across all instances
//// It's good practice to add reusable methods to the prototype instead of in the object

// Todo.prototype.getTodoName = function () {
//   console.log(this.name);
// };

// const todo = new Todo("Buy eggs", false);
// const todo2 = new Todo("Finish Js Course", false);
// console.log(todo, todo2);
// todo2.getTodoName();

//// Prototypal inheritance

// function Enemy(life, name, level) {
//   this.life = life;
//   this.name = name;
//   this.level = level;
// }

// Enemy.prototype.getInfo = function () {
//   console.log(this.life, this.name, this.level);
// };
// Enemy.prototype.attack = function () {
//   console.log(`${this.name} has attacked`);
// };
// Enemy.prototype.block = function () {
//   console.log(`${this.name} has blocked`);
// };

// function Dragon(life, name, level, color, spell) {
//   //Keyword 'this' is going to reference the Dragon Object
//   Enemy.call(this, life, name, level);

//   // define other args as normal
//   this.color = color;
//   this.spell = spell;
// }
//// We can attach the prototype from other objects, such as Enemy
//// But we have to add it before adding object specific prototypes
// Dragon.prototype = Object.create(Enemy.prototype);

//// We can add it's own specific prototype methods
// Dragon.prototype.fireBreath = function () {
//   console.log("FIRE BREATHHHH!!!");
// };

// const newDragron = new Dragon(100, "Eragon", 1, "Green", "Fire Breath");
// newDragron.fireBreath();
// console.log(newDragron);

//+==========================================================================+//
//// Classes solve some of the qwerkiness of Construction functions

class Enemy {
  constructor(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level;
  }
  //// you can add functions as if it was a method in an object but it automatically
  //// adds it to the prototype
  getInfo() {
    console.log(this.life, this.name, this.level);
  }
}

const turtle = new Enemy(100, "Squirtle", 10);
console.log(turtle);

//// If you want to create a special enemy that inherits Enemy

class Bug extends Enemy {
  constructor(life, name, level, legs, dmg) {
    super(life, name, level);
    this.legs = legs;
    this.dmg = dmg;
  }
}

const beetle = new Bug(100, "John", 25, 6, 50);
console.log(beetle);
